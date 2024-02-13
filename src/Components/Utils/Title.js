import React from 'react'

const Title = ({ children }) => {
    return (
        <div className='text-center font-bold text-xl'>
            <p className='border-b-2 inline pb-1 border-primary'>{children}</p>
        </div>
    )
}

export default Title