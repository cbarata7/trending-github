import React from 'react'
import scss from './styles.module.scss'
import './main.scss'
import ReposList from '../components/ReposList'
import { RepoInfoProvider } from '../contexts/RepoInfo'
import SideBar from '../components/SideBar'
import { Typography } from '@mui/material'
import ChipsList from '../components/ChipsList'
import { SearchParamsProvider } from '../contexts/SearchParams'

function App(): JSX.Element {
    return (
        <SearchParamsProvider>
            <RepoInfoProvider>
                <header className={scss['App-header']}>
                    <Typography variant="h4">Repo trending</Typography>
                    <ChipsList />
                    <SideBar />
                    <ReposList />
                </header>
            </RepoInfoProvider>
        </SearchParamsProvider>
    )
}

export default App
