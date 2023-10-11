import React from 'react'
import EmailSection from './EmailSection'

const ContactSection = () => {
    return (
        <section id='contact'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start p-6 mt-4 xl:gap-16 '>
             
                <div className=''>
                <h2 className='font-semibold text-white text-4xl mb-4 '>{`Let's connect`}</h2>
                <p className='text-white font-extralight text-base md:text-lg '>{`I'm currently looking for new opportunities. Send an email, my inbox is always open and let's work together`}</p>
               
                </div>
                <div className=''>
<EmailSection/>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
