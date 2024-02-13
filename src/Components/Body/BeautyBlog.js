import React from 'react'
import Title from '../Utils/Title'
import Blog1 from "../../Images/Blog1.png"
import Blog2 from "../../Images/Blog2.png"
import Blog3 from "../../Images/blog3.png"





const Product1 = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center p-8 rounded-md shadow-lg shadow-[#dde5de] border-2 bg-[#E4FFE7] border-[#E4FFE7]'>
      <p> Vitamin C is a powerful antioxidant that neutralizes free radicals.
        The sun's rays, cigarette smoke, pollution and a lack of sleep can
        increase the number of free radicals which oxidize cells on a daily
        basis and weaken collagen.
      </p>
      <img src={Blog1} alt="Blog 1" className='w-2/3 mt-10' />
    </div>
  )
}

const Product2 = () => {
  return (
    <div className='h-full  flex flex-row items-center justify-between p-8 rounded-md shadow-lg shadow-[#dde5de] border-2 bg-[#E5FCFF] border-[#E5FCFF]'>
      <img src={Blog3} alt="Blog 1" className='w-28' />
      <p className='ml-6'> Vitamin C is a powerful antioxidant that neutralizes free radicals.
        The sun's rays, cigarette smoke, pollution and a lack of sleep can
        increase the number.
      </p>
    </div>
  )
}

const Product3 = () => {
  return (
    <div className='relative h-full flex flex-row items-center justify-between p-8 rounded-md shadow-lg shadow-[#dde5de] border-2 bg-[#fff6f6] border-[#fff6f6]'>
      <p className='mr-6 w-80'>
        Vitamin C is a powerful antioxidant that neutralizes free radicals.
        The sun's rays, cigarette smoke, pollution and a lack of sleep can
        increase the number.
      </p>
      <img src={Blog2} alt="Blog 1" className='absolute bottom-0 right-0 w-32' />
    </div>
  )
}

const BeautyBlog = () => (
  <div className='my-32 mx-16'>
    <Title>Beauty Blog</Title>
    <div className='mt-8 grid grid-cols-2 gap-8'>
      <div>
        <Product1 />
      </div>
      <div className="flex flex-col justify-between gap-8">
        <Product2 />
        <Product3 />
      </div>
    </div>
  </div>
)

export default BeautyBlog
