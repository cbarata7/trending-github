import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

type Props = {
    isLoading: boolean
}
const WaitingBackdrop: React.FC<Props> = ({ isLoading }) => {
    return (
        <Backdrop
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={isLoading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default WaitingBackdrop
