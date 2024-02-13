import React from 'react'
import { Card } from 'antd';

import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';



const ViewAllCard = ({ link }) => {
    return (
        <div
            key="view-all"
            onClick={() => {
                // Handle click for "View All" card
            }}
            className='flex flex-col justify-between w-[150px] ml-5 cursor-pointer'
        >
            <div className="flex justify-between items-center px-4 py-3 hover:underline">
                <Link to={link}>
                    <h2 className='text-base font-bold text-primary'>View All</h2>
                </Link>
                <ArrowLongRightIcon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex justify-center items-center flex-grow">
                {/* Additional content can go here */}
            </div>
        </div>

    )
}

export default ViewAllCard