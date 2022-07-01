import React, { useContext, useEffect, useState } from 'react'
import { getReposFromGitHub } from '../../Api/getReposFromGitHub'
import { getDateFromToday } from '../../helpers/getDateFromToday'
import { Repo } from '../../types/repo'

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
    const [data, setData] = useState([])

    useEffect(() => {
        getReposFromGitHub(getDateFromToday(7)).then((res) => {
            setData(res.data.items)
        })
    }, [])

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
