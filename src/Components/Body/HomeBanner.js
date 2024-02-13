import React from 'react'
import Button from "../Utils/Button"

import BackGroundImage from "../../Images/BackgroundImage.png"
import BannerSidePhoto from "../../Images/BannerSidePhoto.png"

const HomeBanner = () => {
    return (
        <div style={{
            backgroundImage: `url(${BackGroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%', // Set width to 100% to fit the container
            height: 'calc(100vh - 80px)', // Set height using calc() function
        }}
            className='grid grid-cols-2 gap-4 mt-16' id='Home'>
            <div className='mt-32 ml-24'>
                <h1 className='text-4xl font-bold'><span className='text-primary'>Discover</span><br /> Something New</h1>
                <p className='mt-4 mb-12 text-[#3d3d3d]'>Naturally-derived ingredients blended with advanced scientific research to deliver transformative results</p>
                <Button>SHOP NOW</Button>
            </div>
            <div className='mt-8 flex justify-center'>
                <img src={BannerSidePhoto} alt="Lotus" width={180} />
            </div>
        </div>
    )
}

export default HomeBanner