import React from 'react'
import Navlink from './Navlink'
import { TNavLinkProps } from '../types/NavbarTypes'

interface IMenuNavbarProps {
    itemNav: TNavLinkProps[]
}

const MenuNavbar = ({ itemNav }: IMenuNavbarProps) => {
    return (
        <ul className='flex flex-col px-4 pb-4 items-left border-b border-white/30'>
            {
                itemNav.map((item, i) =>
                    <li key={i}>
                        <Navlink title={item.title} href={item.href} />
                    </li>
                )
            }
        </ul>
    )
}

export default MenuNavbar
