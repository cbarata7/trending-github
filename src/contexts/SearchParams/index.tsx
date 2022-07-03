import React, { useContext, useState } from 'react'
import { getDateFromToday } from '../../helpers/getDateFromToday'

type Context = {
    searchParams: SearchParams
    setSearchParams: (state: SearchParams) => void
}

type ProviderProps = {
    children: React.ReactNode
}

export type SearchParams = {
    date: string
    favorites: boolean
    language?: string
}

export const defaultSearchParams = {
    date: getDateFromToday(7),
    favorites: false,
    language: undefined,
}

export const SearchParamsContext = React.createContext<Context>({
    searchParams: defaultSearchParams,
    setSearchParams: () => defaultSearchParams,
})

export const SearchParamsProvider: React.FC<ProviderProps> = ({ children }) => {
    const [searchParams, setSearchParams] =
        useState<SearchParams>(defaultSearchParams)

    return (
        <SearchParamsContext.Provider value={{ searchParams, setSearchParams }}>
            {children}
        </SearchParamsContext.Provider>
    )
}

export const useSearchParams = () => useContext(SearchParamsContext)
