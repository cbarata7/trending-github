import {
    Box,
    Drawer,
    FormControl,
    InputLabel,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material'
import React from 'react'

import { useSearchParams } from '../../contexts/SearchParams'
import { languageColors as language } from '../../helpers/languageColors'
import { SearchParams } from '../../types/searchParams'

const SideBar: React.FC = () => {
    const { searchParams, setSearchParams } = useSearchParams()

    const changeSearchParams = (
        key: keyof SearchParams,
        value: SearchParams[keyof SearchParams],
    ) => {
        setSearchParams({
            ...searchParams,
            [key]: value,
        })
    }

    const handleChange = (event: SelectChangeEvent) => {
        changeSearchParams('language' as keyof SearchParams, event.target.value)
    }

    return (
        <Drawer anchor="left" variant="permanent" open={true}>
            <Box
                sx={{
                    width: 250,
                }}
                role="presentation"
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() =>
                                changeSearchParams(
                                    'favorites' as keyof SearchParams,
                                    true,
                                )
                            }
                        >
                            <ListItemText primary={'My favorite repos'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <FormControl fullWidth>
                            <InputLabel id="languageLabel">Language</InputLabel>
                            <Select
                                id="demo-simple-select"
                                labelId="languageLabel"
                                data-testid="selectLanguage"
                                label="Language"
                                onChange={handleChange}
                                defaultValue=""
                            >
                                {language.map(({ language }) => (
                                    <MenuItem key={language} value={language}>
                                        {language}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}

export default SideBar
