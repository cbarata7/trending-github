import { Stack, Typography } from '@mui/material'
import React from 'react'

import { useRepoInfo } from '../../contexts/RepoInfo'
import Card from '../Card'
import WaitingBackdrop from '../WaitingBackdrop'

const ReposList: React.FC = () => {
    const { repos, isLoading } = useRepoInfo()

    return (
        <>
            <WaitingBackdrop isLoading={isLoading} />
            <Stack spacing={2}>
                {repos.map((repo) => (
                    <div data-testid={`testing-Card-${repo.id}`} key={repo.id}>
                        <Card repo={repo}></Card>
                    </div>
                ))}
                {!isLoading && repos.length < 1 && (
                    <Typography>
                        There&apos;s no results for these filters
                    </Typography>
                )}
            </Stack>
        </>
    )
}

export default ReposList
