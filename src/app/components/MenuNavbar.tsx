import React from 'react'
import Navlink from './Navlink'
import { TNavLinkProps } from '../types/NavbarTypes'

interface IMenuNavbarProps {
    itemNav: TNavLinkProps[]
}

const MenuNavbar = ({ itemNav }: IMenuNavbarProps) => {
    return (
        <ul className='flex   flex-col px-4 pb-4 items-left  '>
           <div className='border-l mx-4 border-white/30'>

            {
                itemNav.map((item, i) =>
                <li key={i}>
                        <Navlink title={item.title} href={item.href} />
                    </li>
                )
            }
            </div>
        </ul>
    )
}

export default MenuNavbar
