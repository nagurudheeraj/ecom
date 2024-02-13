import React from 'react'
import Title from "../Utils/Title"

import TwentyYearsCeleb from "../../Images/20yearsCelebration.png"


const AboutUs = () => {
    return (
        <div>
            <Title>About Us</Title>
            <div className='grid grid-cols-3 items-center justify-start bg-[#F4FEF0] p-16 mt-8'>
                <img src={TwentyYearsCeleb} alt="Promotion" className='w-[70%] ml-20' />
                <div className='col-span-2'>
                    <p className='font-normal mb-4 mx-16'>Stargaze was founded by Dr. John Smith in the year 2000 with the sole
                        objective of creating breakthrough formulations and providing the best that
                        the nature has to offer to everyone. We seek out the treasures of the natural
                        world and delve deep into centuries old traditions to come up with the most
                        potent extracts that make you look and feel incredible. We seek out the treasures of the natural
                        world and delve deep into centuries old traditions to come up with the most
                        potent extracts that make you look and feel incredible.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs