import React from 'react'

import assets from '../assets/assets'
import Title from './Title'

const Services = () => {

    const servicesData =[
        {
         title: 'Advertising',
         description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
         icon:assets.ads_icon

        },
        {
         title: 'Content marketing',
         description: 'We help you execute your plan and deliver results.',
         icon:assets.marketing_icon

        },
        {
            title:'Content writing',
            description:'We help you create amarketing strategy that delivers results.',
            icon:assets.content_icon
        },
        {
          title: 'Social media',
          description: 'We help you build a strong social media presence that connects with your audience.',
          icon: assets.social_icon
        },
    ] 
  return (
    <div id='services' className=' relative flex flex-col items-center gap-7 px-4
     sm:px-12 lg:px-24 xl:px-30 text-gray-700 dark:text-white'>


        <img src={assets.bgImage2} alt="" className='absolute
        -top-110 -left-70 -z-1 dark:hidden'/>
        <Title title='How can we help?' desc='From strategy to
         execution, we empower your brand to thrive in the digital landscape.'/>
      
    </div>
  )
}

export default Services
