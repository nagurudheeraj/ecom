import React, { useState } from 'react'
import { useParams } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { Image, Rate, message } from 'antd';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import Button from '../Utils/Button';
import { addProduct } from '../../Redux/features/addToCartSlice';



const ProductPage = () => {
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    let { id } = useParams();
    const productDetails = JSON.parse(decodeURIComponent(id));
    window.scrollTo(0, 0);
    const stars = [2.5, 3, 3.5, 4, 4.5, 5]
    const randomIndex = Math.floor(Math.random() * stars.length);

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        console.log("kkk");
        messageApi.open({
            type: 'success',
            content: 'Item added to cart.',
        });
    };

    return (
        <div className='mt-16 mx-16 grid grid-cols-2'>
            {contextHolder}
            <div className='min-h-[90vh] flex flex-row items-center justify-center'>
                <Image
                    width={productDetails.width}
                    src={productDetails.image}
                    placeholder={
                        <Image
                            preview={false}
                            src={`${productDetails.image}?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200`}
                            width={productDetails.width}
                        />
                    }
                />
            </div>
            <div>
                <div className='mt-20 mx-16'>
                    <h2 className='text-xl font-bold mb-3'>{productDetails.name}</h2>
                    <Rate allowHalf defaultValue={stars[randomIndex]} />
                    <p className='mt-4 text-primary font-medium'>Cost: ${productDetails.price}</p>
                    <p className='mt-5'>{productDetails.describe}</p>
                    <div className='mt-5 mb-10 flex items-center'>
                        <h3 className='font-semibold text-[#585858]'>Quantity</h3>
                        <div className="flex items-center">
                            <button
                                onClick={decrement}
                                className="px-3 py-2 bg-[#add1a6] rounded-l cursor-pointer ml-5"
                            >
                                <MinusIcon className="h-4 w-4 text-black" />
                            </button>
                            <span className="px-3 py-1 bg-gray-100 fon">{quantity}</span>
                            <button
                                onClick={increment}
                                className="p-3 py-2 bg-[#add1a6] rounded-r cursor-pointer"
                            >
                                <PlusIcon className="h-4 w-4 text-black" />
                            </button>
                        </div>
                    </div>
                    <Button onClick={() => {
                        dispatch(addProduct({ ...productDetails, quantity }));
                        success()
                    }}>Add To Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
