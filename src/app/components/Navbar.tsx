'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Navlink from './Navlink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import navbarTitle from '../utils/navbarTitle'
import MenuNavbar from './MenuNavbar'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-black opacity-80'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-6'>
                <Link href={'/'} className='font-bold text-3xl'>K•</Link>
                <div className='mobile block md:hidden' onClick={() => setOpen(!open)}>
                    {
                        !open ? (
                            <button><Bars3Icon className='w-5 h-5 text-white' /></button>
                        ) : (<button><XMarkIcon className='w-5 h-5 text-white' /></button>)
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex md:space-x-6 p-4 md:p-0 md:flew-row'>
                        {
                            navbarTitle.map((itemNav, i) =>
                                <li key={i}>
                                    <Navlink href={itemNav.href} title={itemNav.title} />
                                </li>)
                        }
                    </ul>
                </div>
            </div>
            {
                open? <MenuNavbar itemNav={navbarTitle}/>:null
            }
        </nav>
    )
}

export default Navbar
