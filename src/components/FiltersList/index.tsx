import { Chip, Stack } from '@mui/material'
import React from 'react'

import {
    defaultSearchParams,
    useSearchParams,
} from '../../contexts/SearchParams'
import { SearchParams } from '../../types/searchParams'
import { mapSearchParamsToFilters } from './helpers'

const FiltersList: React.FC = () => {
    const { searchParams, setSearchParams } = useSearchParams()

    const activeFilters = mapSearchParamsToFilters(searchParams)

    const handleDelete = (key: keyof SearchParams) => {
        setSearchParams({
            ...searchParams,
            [key]: defaultSearchParams[key],
        })
    }

    return (
        <Stack data-testid="FiltersList" direction="row" spacing={1}>
            {activeFilters.map(({ key, label }) => (
                <Chip
                    key={key}
                    label={label}
                    onDelete={() => handleDelete(key as keyof SearchParams)}
                    color="primary"
                />
            ))}
        </Stack>
    )
}

export default FiltersList
