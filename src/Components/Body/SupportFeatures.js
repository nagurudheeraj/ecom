import React from 'react'
import { BanknotesIcon, TruckIcon, GlobeEuropeAfricaIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'


const SupportFeatures = () => {
    return (
        <div className='my-24 mx-16'>
            <div class="grid grid-cols-4 gap-4 items-center justify-items-center">
                <div class="flex gap-8 font-medium">
                    <TruckIcon className="h-12 w-12 text-primary" />
                    <p>Free<br />Shipping</p>
                </div>
                <div class="flex gap-8 font-medium">
                    <BanknotesIcon className="h-12 w-12 text-primary" />
                    <p>COD<br />Available</p>
                </div>
                <div class="flex gap-8 font-medium">
                    <GlobeEuropeAfricaIcon className="h-12 w-12 text-primary" />
                    <p>Nationwide<br />Delivery</p>
                </div>
                <div class="flex gap-8 font-medium">
                    <ChatBubbleLeftRightIcon className="h-12 w-12 text-primary" />
                    <p>All Day<br />Support</p>
                </div>
            </div>
        </div>
    )
}

export default SupportFeatures