'use client'
import React from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import firebase_app from '../utils/firebase'
import { FormikProvider, useFormik } from 'formik'
import { TUserInformation } from '../types/UserInformationType'

const EmailSection = () => {

    const db = getFirestore(firebase_app)
    const formik = useFormik({
        initialValues: {
            email: '',
            subject: '',
            message: ''
        },
        onSubmit: values => handleForm(values )
    })
    const handleForm = async (values: TUserInformation, ) => {
        try {
            let res = await addDoc(collection(db, 'contact'), {
             email: values.email,
             subject: values.subject,
             message:values.message
            })
formik.resetForm()
        } catch (err: any) {
            throw new Error(err)
        }
    }
    return (
        <FormikProvider value={formik}>

      
        <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit} >
            <label htmlFor='email' className='text-whiteblock text-sm font-light text-slate-400'>Your Email </label>
            <input type='email' id='email' required placeholder='example@mail.com' onChange={formik.handleChange} value={formik.values.email} className='bg-transparent border  border-gray-700   rounded-lg px-4 py-2 placeholder:text-slate-400/20' />
            <label htmlFor='Subject' className='text-whiteblock  text-sm  font-light text-slate-400'>Subject </label>
            <input type='text' id='subject' required placeholder='Write something' value={formik.values.subject} className='bg-transparent border   border-gray-700   rounded-lg px-4 py-2 placeholder:text-slate-400/20' onChange={formik.handleChange} />
            <label htmlFor='Message' className='text-whiteblock  text-sm font-light text-slate-400'>Message </label>
            <textarea value={formik.values.message} onChange={formik.handleChange} id='message' required className='bg-transparent border border-gray-700  rounded-lg px-4 py-2 placeholder:text-slate-400' />
            <button
                type='submit'
                className=' bg-gradient-to-r mt-4 from-green-500 to-yellow-500 rounded-lg p-2'>
                Send
            </button>

        </form>
        </FormikProvider>
    )
}

export default EmailSection
