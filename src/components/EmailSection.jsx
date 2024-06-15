"use client"
import React, { useState } from 'react'

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setEmailSubmitted(true)
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = "/api/send"

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)
        const resData = await response.json()
        if (resData.status === 200) {
            
            console.log('message sent')
        }
    }

  return (
    <>
    <div id='email' className='flex flex-col items-center  pt-8'>
        <p className='font-semibold text-[25px]'>Contact us</p>
        <hr className='border-t-3 border-black w-[130px]' />    
    </div>
    <section id='contact' className='grid md:grid-cols-2 py-8 gap-4 relative px-8 md:px-24'>
        <div className='z-10'>
            <p className='text-black font-semibold text-[20px] my-2'>Get in touch</p>
            <p className='text-[black] mb-4 max-w-md'>
                I am always looking for new opportunities. My inbox is always open, feel free to get in touch!
            </p>

        </div>
        <div>
            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="email" className='text-black block mb-2 text-sm font-medium'>Your Email</label>
                    <input name='email' type="email" id='email' required className='bg-[lightgrey] border-[black] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5' placeholder='john@email.com'/>
                </div>
                <div className='mb-4'> 
                    <label htmlFor="subject" className='text-black block m-2 text-sm font-medium'>Subject</label>
                    <input name='subject' type="text" id='subject' required className='bg-[lightgrey] border-[black] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5' placeholder='Hello!'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="message" className='text-black block text-sm mb-2 font-medium'>Message</label>
                    <textarea name="message" id="message" className='bg-[lightgrey] border-[black] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5' placeholder="Let's talk..."></textarea>
                </div>
                <button type='submit' className='discover-button text-black font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
                {
                    emailSubmitted ?
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p> : null
                }
            </form>
        </div>
    </section>
    </>
  )
}

export default EmailSection