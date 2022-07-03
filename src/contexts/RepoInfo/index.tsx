import React, { useContext, useEffect, useState } from 'react'
import { getReposFromGitHub } from '../../api/getReposFromGitHub'
import { getFavorites } from '../../helpers/favorites'
import { Repo } from '../../types/repo'
import { useSearchParams } from '../SearchParams'

type Context = {
    repos: Repo[]
}

type ProviderProps = {
    children: React.ReactNode
}

export const RepoInfoContext = React.createContext<Context>({
    repos: [],
})

export const RepoInfoProvider: React.FC<ProviderProps> = ({ children }) => {
    const { searchParams } = useSearchParams()
    const [data, setData] = useState<Repo[]>([])

    useEffect(() => {
        getReposFromGitHub(searchParams.date, searchParams.language).then(
            (res) => {
                const items = res.data.items as Repo[]

                if (searchParams.favorites) {
                    const savedFavorites = getFavorites()

                    const favorites = items.filter(({ id }) =>
                        savedFavorites.includes(id),
                    )

                    setData(favorites)
                } else {
                    setData(items)
                }
            },
        )
    }, [searchParams.date, searchParams.favorites, searchParams.language])

    return (
        <RepoInfoContext.Provider value={{ repos: data }}>
            {children}
        </RepoInfoContext.Provider>
    )
}

export const useRepoInfo = (): Repo[] => {
    const { repos } = useContext(RepoInfoContext)
    return repos
}
