import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className='bg-primary py-3 px-5 rounded-md font-medium text-white text-sm'>
            {children}
        </button>
    );
}

export default Button;
