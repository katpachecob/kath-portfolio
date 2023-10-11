import React from 'react'

const EmailSection = () => {
    return (
        <form className='flex flex-col gap-4 '>
            <label htmlFor='email' className='text-whiteblock text-sm font-light text-slate-400'>Your Email </label>
            <input type='email' id='email' required placeholder='example@mail.com' className='bg-transparent border  border-gray-700   rounded-lg px-4 py-2 placeholder:text-slate-400/20' />
            <label htmlFor='Subject' className='text-whiteblock  text-sm  font-light text-slate-400'>Subject </label>
            <input type='text' id='subject' required placeholder='Write something' className='bg-transparent border   border-gray-700   rounded-lg px-4 py-2 placeholder:text-slate-400/20' />
            <label htmlFor='Message' className='text-whiteblock  text-sm font-light text-slate-400'>Subject </label>
            <textarea id='messsage' required  className='bg-transparent border border-gray-700  rounded-lg px-4 py-2 placeholder:text-slate-400' />
<button
type='submit'
className=' bg-gradient-to-r mt-4 from-green-500 to-yellow-500 rounded-lg p-2'>
     Send
</button>

        </form>
    )
}

export default EmailSection
