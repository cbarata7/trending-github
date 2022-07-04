import './main.scss'

import { Typography } from '@mui/material'
import React from 'react'

import FiltersList from '../components/FiltersList'
import Menu from '../components/Menu'
import ReposList from '../components/ReposList'
import { ReactQueryProvider } from '../contexts/ReactQuery'
import { RepoInfoProvider } from '../contexts/RepoInfo'
import { SearchParamsProvider } from '../contexts/SearchParams'

function App(): JSX.Element {
    return (
        <ReactQueryProvider>
            <SearchParamsProvider>
                <RepoInfoProvider>
                    <div className="flex mt-1">
                        <div className="flex-none">
                            <Menu />
                        </div>
                        <div className="flex grow flex-col items-center gap-6 mr-10">
                            <Typography className="text-[#ffffff]" variant="h4">
                                Repo trending
                            </Typography>
                            <FiltersList />
                            <ReposList />
                        </div>
                    </div>
                </RepoInfoProvider>
            </SearchParamsProvider>
        </ReactQueryProvider>
    )
}

export default App
