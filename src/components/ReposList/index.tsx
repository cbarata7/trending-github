import React from 'react'
import { Stack } from '@mui/material'
import { useRepoInfo } from '../../contexts/RepoInfo'
import Card from '../Card'

const ReposList: React.FC = () => {
    const repos = useRepoInfo()

    return (
        <Stack spacing={2}>
            {repos.map((repo) => (
                <div data-testid={`testing-Card-${repo.id}`} key={repo.id}>
                    <Card repo={repo}></Card>
                </div>
            ))}
        </Stack>
    )
}

export default ReposList
