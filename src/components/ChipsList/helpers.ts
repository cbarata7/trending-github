import { SearchParams } from '../../contexts/SearchParams'

export const mapSearchParamsToFilters = (searchParams: SearchParams) => {
    const activeFilters = []

    if (searchParams.favorites) {
        activeFilters.push({
            key: 'favorites',
            label: 'favorites',
        })
    }

    if (searchParams.language) {
        activeFilters.push({
            key: 'language',
            label: `language:${searchParams.language}`,
        })
    }

    return activeFilters
}
