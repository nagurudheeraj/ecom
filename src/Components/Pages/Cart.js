import React, { useState } from 'react';
import Button from "../Utils/Button"
import { Divider, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import { deleteProduct, decrementProductQuantity, incrementProductQuantity } from '../../Redux/features/addToCartSlice';

import emptycart from "../../Images/emptycart.png"
import { Link } from 'react-router-dom';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PAYPAL_CLIENT_ID = "AXc5_2lPFuJDRZtHiLYocf59Yv7y5quBZh2RwwspDR1d8OFPMiCr5pXcR-T_bGoRuhbtNcNjiedohy09";


const Cart = () => {
    const dispatch = useDispatch();
    window.scrollTo(0, 0);
    const count = useSelector((state) => state.addToCart)

    const subTotal = count.reduce((total, product) => total + product.productTimesQty, 0);
    const shipping = 5;
    const tax = Math.ceil(subTotal * 0.1);
    const savings = shipping + tax;
    const total = subTotal;

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        console.log("kkk");
        messageApi.open({
            type: 'success',
            content: 'Item removed from cart.',
        });
    };



    return (
        <div>
            {contextHolder}
            {count.length > 0 ?
                <div className='grid grid-cols-3  min-h-[100vh]'>
                    <div className="py-28 px-16 col-span-2">
                        {/* <h1 className='font-medium text-[#909090] mb-10'>Shopping Cart</h1> */}
                        {count.map((_, index) => (
                            <div key={_.id} className="relative flex justify-center my-5 min-h-20">
                                <div className="flex justify-between items-center w-[90%] shadow py-3 px-14 rounded-md h-20">
                                    <img src={_.image} alt={_.name} className='w-14 max-w-16 h-full'  />
                                    <p className='w-24 font-medium text-[0.9rem]'>{_.name}</p>
                                    <div className='flex justify-center items-center'>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => {
                                                    dispatch(decrementProductQuantity(_.id));
                                                }}
                                                className="px-3 py-2 bg-[#add1a6] rounded-l cursor-pointer ml-5"
                                            >
                                                <MinusIcon className="h-4 w-4 text-black" />
                                            </button>
                                            <span className="px-3 py-1 bg-gray-100 fon">{_.quantity}</span>
                                            <button
                                                onClick={() => {
                                                    dispatch(incrementProductQuantity(_.id));
                                                }}
                                                className="p-3 py-2 bg-[#add1a6] rounded-r cursor-pointer"
                                            >
                                                <PlusIcon className="h-4 w-4 text-black" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className='w-10'>${_.price * _.quantity}</p>
                                    <button className="" onClick={() => {
                                        dispatch(deleteProduct(_.id));
                                        success()
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#939393]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    <div className='mt-32 mr-28 text-[0.9rem]'>
                        <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
                        <div className='flex justify-between mt-2 text-slate-600'>
                            <p>Total Items</p>
                            <p>{count.length}</p>
                        </div>
                        <div className='flex justify-between mt-2 text-slate-600'>
                            <p>Sub Total</p>
                            <p>${subTotal}</p>
                        </div>
                        <div className='flex justify-between mt-2 text-slate-600'>
                            <p>Shipping</p>
                            <p>${shipping}</p>
                        </div>
                        <div className='flex justify-between mt-2 text-slate-600'>
                            <p>Tax (10%)</p>
                            <p>${tax}</p>
                        </div>
                        <div className='flex justify-between mt-2 text-slate-600'>
                            <p>Savings</p>
                            <p>${savings}</p>
                        </div>
                        <Divider className='mb-[6px]' />
                        <div className='flex justify-between text-primary font-semibold mb-10'>
                            <p>Total</p>
                            <p>${total}</p>
                        </div>

                        <div className="-z-30 mt-5 mb-20">
                            <PayPalScriptProvider options={{ 'client-id': PAYPAL_CLIENT_ID }}>
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: total
                                                    }
                                                }
                                            ]
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then(function (details) {
                                            alert('Transaction completed by ' + details.payer.name.given_name);
                                        });
                                    }}
                                />
                            </PayPalScriptProvider>
                        </div>
                    </div>
                </div> : <div className="flex flex-col items-center justify-center h-[100vh]">
                    <img src={emptycart} alt="empty cart" width={240} />
                    <p className="text-gray-600 mt-4 mb-8">Your cart is empty</p>
                    <Link to="/">
                        <Button>Continue Shopping</Button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Cart