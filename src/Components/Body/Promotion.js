import React from 'react'
import PromotionImage from "../../Images/Promotion.png"
import Button from '../Utils/Button'

const Promotion = () => {
    return (
        <div className='grid grid-cols-2 items-center justify-start bg-[#F4FEF0] p-16 mt-32'>
            <img src={PromotionImage} alt="Promotion" className='w-[60%] ml-20' />
            <div className='ml-32'>
                <h2 className='text-primary font-bold text-2xl'>BUY 3 ITEMS</h2>
                <p className='font-semibold mb-4'>Get one for free</p>
                <Button>SHOP NOW</Button>
            </div>
        </div>
    )
}

export default Promotion