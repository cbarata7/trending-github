import React, { useContext } from 'react'

import { useGetRepoFromGitHub } from '../../api/getReposFromGitHub'
import { getFavorites } from '../../helpers/favorites'
import { Repo } from '../../types/repo'
import { useSearchParams } from '../SearchParams'

type Context = {
    repos: Repo[]
    isLoading: boolean
}

type ProviderProps = {
    children: React.ReactNode
}

export const RepoInfoContext = React.createContext<Context>({
    isLoading: false,
    repos: [],
})

export const RepoInfoProvider: React.FC<ProviderProps> = ({ children }) => {
    const { searchParams } = useSearchParams()
    const { data, isLoading } = useGetRepoFromGitHub({
        currentDate: searchParams.date,
        language: searchParams.language,
    })

    let fullData = data?.items

    if (searchParams.favorites) {
        const savedFavorites = getFavorites()

        fullData = data?.items?.filter(({ id }) => savedFavorites.includes(id))
    }

    return (
        <RepoInfoContext.Provider value={{ isLoading, repos: fullData || [] }}>
            {children}
        </RepoInfoContext.Provider>
    )
}

export const useRepoInfo = () => useContext(RepoInfoContext)
