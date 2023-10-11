import React from 'react'
import CardInformation from './CardInformation'
import { informationData } from '../utils/informationData'

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='md:grid md:grid-cols-2 gap-6 items-start p-6 mt-4 xl:gap-16 '>
     
        <div>
          <h2 className='font-semibold text-4xl mb-4 '>About Me</h2>
          <p className='font-extralight text-base md:text-lg '>
            I am a full-stack web developer who loves creating interactive web and mobile applications. I began my programming journey during the pandemic, focusing on JavaScript, HTML, and CSS. Nowadays, I have gained experience in TypeScript, React, React Native, Node.js, Three.js, Express, MongoDB and AWS. I consider myself a self-taught individual that enjoys working in a team.
          </p>
          
        </div>
        <div className='flex flex-col gap-4'>
        <CardInformation informationData={informationData}/>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
