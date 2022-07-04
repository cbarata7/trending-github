import './main.scss'

import { Typography } from '@mui/material'
import React from 'react'

import ChipsList from '../components/ChipsList'
import ReposList from '../components/ReposList'
import SideBar from '../components/SideBar'
import { ReactQueryProvider } from '../contexts/ReactQuery'
import { RepoInfoProvider } from '../contexts/RepoInfo'
import { SearchParamsProvider } from '../contexts/SearchParams'
import scss from './styles.module.scss'

function App(): JSX.Element {
    return (
        <ReactQueryProvider>
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
        </ReactQueryProvider>
    )
}

export default App
