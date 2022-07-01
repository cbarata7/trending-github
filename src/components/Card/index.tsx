import {
    Card as MuiCard,
    CardContent,
    Link,
    Stack,
    Typography,
} from '@mui/material'
import React from 'react'
import { Repo } from '../../types/repo'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined'
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import ForkLeftOutlinedIcon from '@mui/icons-material/ForkLeftOutlined'
import CircleIcon from '@mui/icons-material/Circle'
import { findColorFromLanguage } from './helper'

type Props = {
    repo: Repo
}

const Card: React.FC<Props> = ({ repo }) => {
    const {
        html_url,
        name,
        description,
        language,
        stargazers_count,
        watchers_count,
        network_count,
        open_issues_count,
        forks_count,
    } = repo

    const badgerInfo = [
        {
            data: language,
            icon: (
                <CircleIcon
                    style={{
                        color: findColorFromLanguage(language),
                    }}
                />
            ),
        },
        {
            data: stargazers_count,
            icon: <StarBorderIcon />,
        },
        {
            data: watchers_count,
            icon: <VisibilityOutlinedIcon />,
        },
        {
            data: network_count,
            icon: <WorkspacesOutlinedIcon />,
        },
        {
            data: open_issues_count,
            icon: <BuildCircleOutlinedIcon />,
        },
        {
            data: forks_count,
            icon: <ForkLeftOutlinedIcon />,
        },
    ]

    return (
        <MuiCard sx={{ maxWidth: 600 }}>
            <CardContent className="p-0">
                <Stack spacing={1}>
                    <Link
                        variant="body1"
                        className="text-left"
                        href={html_url}
                        target="_blank"
                    >
                        {name}
                    </Link>
                    <Typography>{description}</Typography>
                    <div className="flex space-x-4">
                        {badgerInfo.map(({ data, icon }) => (
                            <div key={data} className="flex">
                                {icon}
                                <Typography>{data}</Typography>
                            </div>
                        ))}
                    </div>
                </Stack>
            </CardContent>
        </MuiCard>
    )
}

export default Card
