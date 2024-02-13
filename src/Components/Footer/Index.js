import React from 'react'
import Button from "../Utils/Button"

import { EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid'
import { Input } from 'antd';
const { TextArea } = Input;


const index = () => {
    return (
        <div className='grid grid-cols-3 bottom-0 w-full' id="Contact">
            <div className='py-16 pl-16 bg-[#E4FFE7]'>
                <p className='border-b-2 font-bold text-lg inline pb-1 border-primary'>Reach us</p>
                <div class="flex gap-4 mt-4">
                    <EnvelopeIcon className="h-6 w-6 text-primary" />
                    <p>Contact@saigaze.com</p>
                </div>
                <div class="flex gap-4 mt-4">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-primary" />
                    <p>+1 812-000-111</p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-10 text-[0.85rem] ">
                    <div>
                        <h3 className='border-b-2 inline border-primary'>New York</h3>
                        <p className='mt-2'>132, Lincon st,<br /> 16790</p>
                    </div>
                    <div>
                        <h3 className='border-b-2 inline border-primary'>Dallas</h3>
                        <p className='mt-2'>182, High-Tech st,<br /> 66790</p>
                    </div>
                </div>
            </div>
            <div className='bg-primary col-span-2'>
                <div className='p-16 bg-[#F4FEF0]'>
                    <p className='border-b-2 font-bold text-lg inline pb-1 border-primary'>Contact us</p>
                    <div class="flex gap-4 mt-4">
                        <p>Feel free to contact us any time. We will get back to you as soon as we can!</p>
                    </div>
                    <div class="flex  gap-4 mt-4">
                        <Input size="large" placeholder="Name" />
                        <Input size="large" placeholder="Email" />
                    </div>
                    <TextArea rows={4} placeholder="Leave your message" maxLength={6} className='my-4' />
                    <Button className="">Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default index