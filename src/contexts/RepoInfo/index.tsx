import React, { useContext } from 'react'

import { useGetRepoFromGitHub } from '../../api/getReposFromGitHub'
import { getFavorites } from '../../helpers/favorites'
import { Repo } from '../../types/repo'
import { useSearchParams } from '../SearchParams'

type Context = {
    repos: Repo[]
    isLoading: boolean
    numberOfRepos: number
}

type ProviderProps = {
    children: React.ReactNode
}

export const RepoInfoContext = React.createContext<Context>({
    isLoading: false,
    numberOfRepos: 0,
    repos: [],
})

export const RepoInfoProvider: React.FC<ProviderProps> = ({ children }) => {
    const { searchParams } = useSearchParams()
    const { data, isLoading } = useGetRepoFromGitHub({
        currentDate: searchParams.date,
        language: searchParams.language,
        page: searchParams.page,
    })

    let fullData = data?.items
    const numberOfRepos = data?.total_count || 0

    if (searchParams.favorites) {
        const savedFavorites = getFavorites()

        fullData = data?.items?.filter(({ id }) => savedFavorites.includes(id))
    }

    return (
        <RepoInfoContext.Provider
            value={{
                isLoading,
                numberOfRepos: numberOfRepos,
                repos: fullData || [],
            }}
        >
            {children}
        </RepoInfoContext.Provider>
    )
}

export const useRepoInfo = () => useContext(RepoInfoContext)
