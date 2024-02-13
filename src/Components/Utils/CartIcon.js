import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../Redux/features/addToCartSlice'


import { Badge } from 'antd';
import { Link } from 'react-router-dom';

const CartIcon = () => {

    const cart = useSelector((state) => state.addToCart)


    return (
        <Link to={"/cart"}>
            <Badge count={cart.length} color='#000000' size="small">
                <ShoppingBagIcon  className="h-6 w-6 text-primary" />
            </Badge>
        </Link>
    )
}

export default CartIcon