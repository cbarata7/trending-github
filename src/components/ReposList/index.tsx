import React from 'react'
import { Stack } from '@mui/material'
import { Repo } from '../../types/repo'
import Card from '../Card'

type Props = {
    repos: Repo[]
}

const ReposList: React.FC<Props> = ({ repos }) => {
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
