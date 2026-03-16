
import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"


const Services = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.ads_icon
    },
    {
      title: 'Content marketing',
      description: 'We help you execute your plan and deliver results.',
      icon: assets.marketing_icon
    },
    {
      title:'Content writing',
      description:'We help you create a marketing strategy that delivers results.',
      icon: assets.content_icon
    },
    {
      title: 'Social media',
      description: 'We help you build a strong social media presence that connects with your audience.',
      icon: assets.social_icon
    },
  ] 

  return (
    <motion.div
     initial="hidden"
     whileInView="visible"
     transition={{ staggerChildren: 0.2}}
     viewport={{ once: true }}
    id='services' className='relative flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white'>
      
      
      <img src={assets.bgImage2} alt="" className='absolute -top-28 -left-20 -z-1 dark:hidden'/>

      
      <div className="text-center mt-12">
        <Title 
          title='How can we help?' 
          desc='From strategy to execution, we empower your brand to thrive in the digital landscape.' 
        />
      </div>

      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full justify-center'>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Services