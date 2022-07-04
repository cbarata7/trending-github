import { Pagination, Stack, Typography } from '@mui/material'
import React from 'react'

import { useRepoInfo } from '../../contexts/RepoInfo'
import { useSearchParams } from '../../contexts/SearchParams'
import Card from '../Card'
import WaitingBackdrop from '../WaitingBackdrop'

const ReposList: React.FC = () => {
    const { repos, isLoading, numberOfRepos } = useRepoInfo()
    const { searchParams, setSearchParams } = useSearchParams()

    const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
        setSearchParams({
            ...searchParams,
            page,
        })
    }

    return (
        <div data-testid="ReposList">
            <WaitingBackdrop isLoading={isLoading} />
            <div className="flex flex-col justify-items-center items-center gap-2 mb-2">
                <Stack spacing={2}>
                    {repos.map((repo) => (
                        <div
                            data-testid={`testing-Card-${repo.id}`}
                            key={repo.id}
                        >
                            <Card repo={repo}></Card>
                        </div>
                    ))}
                    {!isLoading && repos.length < 1 && (
                        <Typography>
                            There&apos;s no results for these filters
                        </Typography>
                    )}
                </Stack>
                <Pagination
                    color="primary"
                    count={Math.ceil(Math.min(numberOfRepos, 1000) / 10)} //Due to an API limitation we can only get until 1000 repos
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default ReposList
