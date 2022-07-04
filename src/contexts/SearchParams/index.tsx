import React, { useContext, useState } from 'react'

import { getDateFromToday } from '../../helpers/getDateFromToday'
import { SearchParams } from '../../types/searchParams'

type Context = {
    searchParams: SearchParams
    setSearchParams: (state: SearchParams) => void
}

type ProviderProps = {
    children: React.ReactNode
}

export const defaultSearchParams = {
    date: getDateFromToday(7),
    favorites: false,
    language: undefined,
    page: 1,
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
