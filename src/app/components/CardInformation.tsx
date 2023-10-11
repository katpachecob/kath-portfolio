'use client'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { TCardInformation } from '../types/CardInformationTypes'

type TCardInformationProps = {
    informationData: TCardInformation[]
}

const CardInformation = ({ informationData }: TCardInformationProps) => {
    const [openInfo, setOpenInfo] = useState('Skills')


    return (
        <div className='flex flex-col gap-4 my-8 md:my-0'>
            {informationData.map(({ information, title }, index) => (
                <div key={index} className='w-full bg-gradient-to-r rounded-lg from-green-500 to-yellow-500 px-4 py-5 container' onClick={() => setOpenInfo(title)}>
                    <div className='flex justify-between text-xl items-center'><p className='mr-3 font-semibold'>{title}</p> <ChevronDownIcon className='w-5 h-5' /></div>
                    {
                        openInfo == title ?
                            <div>
                                {
                                    information.map((info, i) =>
                                        <div key={i} className='my-2' >
                                            <p className='font-light text-md '>{info.name}</p>
                                            <div className='flex flex-wrap space-x-1'>

                                                {info.description.map(item =>
                                                    <p className='font-extralight text-sm'>{item}</p>)}
                                            </div>

                                        </div>
                                    )
                                }
                            </div> : null
                    }
                </div>
            ))}
        </div>
    )
}

export default CardInformation
