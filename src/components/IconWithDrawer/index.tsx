import MenuIcon from '@mui/icons-material/Menu'
import { Drawer, IconButton } from '@mui/material'
import React, { useState } from 'react'

import SideBar from '../SideBar'

const IconWithDrawer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <IconButton
                aria-label="upload picture"
                onClick={() => setIsOpen(true)}
            >
                <MenuIcon className="text-[#ffffff]" />
            </IconButton>

            <Drawer
                anchor={'left'}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <SideBar />
            </Drawer>
        </>
    )
}

export default IconWithDrawer
