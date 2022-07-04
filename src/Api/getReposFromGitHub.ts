import axios from 'axios'
import { useQuery } from 'react-query'

import { Repo } from '../types/repo'

const url =
    'https://api.github.com/search/repositories?q=:query&sort=stargazers_count&order=desc'

type GetRepoFromGitHubArgs = {
    currentDate: string
    language?: string
}

type GetRepoFromGitHubResponse = {
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
        [QueryCacheKeys.GET_REPO_FROM_GITHUB, params.language],
        async () => {
            const { data } = await axios.get<GetRepoFromGitHubResponse>(
                url.replace(':query', generateQuery(params)),
            )

            return data
        },
    )
}
