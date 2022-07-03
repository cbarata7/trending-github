import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined'
import CircleIcon from '@mui/icons-material/Circle'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ForkLeftOutlinedIcon from '@mui/icons-material/ForkLeftOutlined'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined'
import {
    Card as MuiCard,
    CardContent,
    IconButton,
    Link,
    Stack,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

import { isFavorite, switchFavorite } from '../../helpers/favorites'
import { Repo } from '../../types/repo'
import { findColorFromLanguage } from './helper'

type Props = {
    repo: Repo
}

const Card: React.FC<Props> = ({ repo }) => {
    const {
        id,
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
            index: 1,
        },
        {
            data: stargazers_count,
            icon: <StarBorderIcon />,
            index: 2,
        },
        {
            data: watchers_count,
            icon: <VisibilityOutlinedIcon />,
            index: 3,
        },
        {
            data: network_count,
            icon: <WorkspacesOutlinedIcon />,
            index: 4,
        },
        {
            data: open_issues_count,
            icon: <BuildCircleOutlinedIcon />,
            index: 5,
        },
        {
            data: forks_count,
            icon: <ForkLeftOutlinedIcon />,
            index: 6,
        },
    ]

    const [isRepoFavorite, setIsRepoFavorite] = useState(isFavorite(id))

    const favoriteClick = () => {
        const removedValue = switchFavorite(id)

        if (removedValue) {
            setIsRepoFavorite(true)
        } else {
            setIsRepoFavorite(false)
        }
    }

    return (
        <MuiCard sx={{ maxWidth: 600 }}>
            <CardContent className="flex items-center">
                <Stack spacing={1} className="flex-1">
                    <Link
                        variant="body2"
                        className="text-left"
                        href={html_url}
                        target="_blank"
                    >
                        {name}
                    </Link>
                    <Typography variant="body2">{description}</Typography>
                    <div className="flex space-x-4">
                        {badgerInfo.map(({ data, icon, index }) => (
                            <div key={index} className="flex">
                                {icon}
                                <Typography variant="body2">{data}</Typography>
                            </div>
                        ))}
                    </div>
                </Stack>
                <div>
                    <IconButton aria-label="favorite" onClick={favoriteClick}>
                        {isRepoFavorite ? (
                            <FavoriteIcon
                                data-testid="favoriteIcon"
                                style={{ color: 'red' }}
                            />
                        ) : (
                            <FavoriteBorderIcon data-testid="notFavoriteIcon" />
                        )}
                    </IconButton>
                </div>
            </CardContent>
        </MuiCard>
    )
}

export default Card
