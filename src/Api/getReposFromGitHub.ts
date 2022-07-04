import axios from 'axios'
import { useQuery } from 'react-query'

import { Repo } from '../types/repo'

const url =
    'https://api.github.com/search/repositories?q=:query&sort=stargazers_count&order=desc&page=:page&per_page=10'

type GetRepoFromGitHubArgs = {
    currentDate: string
    language?: string
    page: number
}

type GetRepoFromGitHubResponse = {
    total_count: number
    items: Repo[]
}

enum QueryCacheKeys {
    GET_REPO_FROM_GITHUB = 'GET_REPO_FROM_GITHUB',
}

const generateQuery = (params: GetRepoFromGitHubArgs) => {
    let baseQuery = `created:>${params.currentDate}`

    if (params.language) {
        baseQuery = baseQuery.concat(`+language:${params.language}`)
    }

    return baseQuery
}

export const useGetRepoFromGitHub = (params: GetRepoFromGitHubArgs) => {
    return useQuery(
        [QueryCacheKeys.GET_REPO_FROM_GITHUB, params.language, params.page],
        async () => {
            const { data } = await axios.get<GetRepoFromGitHubResponse>(
                url
                    .replace(':query', generateQuery(params))
                    .replace(':page', params.page.toString()),
            )

            return data
        },
    )
}
