import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = 
[
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },
    {
        title: 'Help',
        path: '/help',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    }
]