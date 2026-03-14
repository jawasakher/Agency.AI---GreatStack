import React, { useState } from 'react'
import assets from '../assets/assets'
import Title from './Title'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here, e.g., send to API
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12
      lg:px-24 xl:px-40 pt-30 text-gray-700 
      dark:text-white'>
      <Title title='Reach out to us' desc='From strategy to
      execution, we craft digital solutions that move your
      business forward.' />

      <form onSubmit={handleSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        <div>
          <p className='mb-2 text-sm font-medium'>Your name</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 
          dark:border-gray-600'>
            <img src={assets.person_icon} alt="" />
            <input 
              type="text" 
              name="name"
              placeholder='Enter your name' 
              className='w-full p-3 text-sm outline-none'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div>
          <p className='mb-2 text-sm font-medium'>Your email</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 
          dark:border-gray-600'>
            <img src={assets.mail_icon} alt="" />
            <input 
              type="email" 
              name="email"
              placeholder='Enter your email' 
              className='w-full p-3 text-sm outline-none'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Your message</p>
          <textarea 
            name="message"
            placeholder='Enter your message' 
            className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 
            dark:border-gray-600 resize-none'
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className='sm:col-span-2 flex justify-center'>
          <button 
            type="submit" 
            className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs
