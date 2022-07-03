import React from 'react'
import { Chip, Stack } from '@mui/material'
import {
    defaultSearchParams,
    SearchParams,
    useSearchParams,
} from '../../contexts/SearchParams'
import { mapSearchParamsToFilters } from './helpers'

const ChipList: React.FC = () => {
    const { searchParams, setSearchParams } = useSearchParams()

    const activeFilters = mapSearchParamsToFilters(searchParams)

    const handleDelete = (key: keyof SearchParams) => {
        setSearchParams({
            ...searchParams,
            [key]: defaultSearchParams[key],
        })
    }

    return (
        <Stack data-testid="chipList" direction="row" spacing={1}>
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

export default ChipList
