import Link from 'next/link'
import React from 'react'
import { TNavLinkProps } from '../types/NavbarTypes'


const Navlink = ({href, title}:TNavLinkProps) => {
  return (

       <Link href={href} className='block py-2 pl-3 pr-4 text-white sm:text-lg font-light rounded md:p-0 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-yellow-300'>{title}</Link>

  )
}

export default Navlink
