import React from 'react';
import { useParams } from "react-router-dom";
import ProductsData from '../../Redux/productsData';

import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/features/addToCartSlice';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Card, message } from 'antd';
import Title from '../Utils/Title';
import productsData from '../../Redux/productsData';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Dropdown, Space } from 'antd';
const { Meta } = Card;



const CategoryPage = () => {
    const { id } = useParams();
    const formattedId = id.replaceAll("-", ' ');
    const dispatch = useDispatch();
    window.scrollTo(0, 0);
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        console.log("kkk");
        messageApi.open({
            type: 'success',
            content: 'Item added to cart.',
        });
    };

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    }

    const items = [
        {
            label: <Link to="/product/category/all">All</Link>,
            key: '0',
        },
        {
            label: <Link to="/product/category/skin-care">Skin Care</Link>,
            key: '1',
        },
        {
            label: <Link to="/product/category/hair-care">Hair Care</Link>,
            key: '2',
        },
        {
            label: <Link to="/product/category/baby">Baby</Link>,
            key: '3',
        },
        {
            label: <Link to="/product/category/body">Body</Link>,
            key: '4',
        },
        {
            label: <Link to="/product/category/oils">Oils</Link>,
            key: '5',
        },
    ];

    return (
        <div className='min-h-screen my-28'>
            <div className='flex justify-center items-center'>
                <div className='font-bold w-50 border-b-2 mb-5 cursor-pointer'>
                    <Dropdown
                        menu={{ items }}
                        trigger={['click']}
                    >
                        <Space className='flex justify-around text-lg'>
                            {capitalizeWords(formattedId)}
                            <ChevronDownIcon className="h-4 w-4 text-primary mt-1" />
                        </Space>
                    </Dropdown>
                </div>
            </div>

            <br />
            {contextHolder}
            <div className='flex justify-center'>
                <div className={`grid grid-cols-5 gap-8`}>
                    {ProductsData[formattedId].map((product, index) =>
                        <Card
                            key={product.id}
                            style={{
                                width: 200,
                                marginTop: "10px"
                            }}
                            cover={
                                <Link to={`/product/${encodeURIComponent(JSON.stringify(product))}`} key={product.id}> {/* Wrap Card with Link */}
                                    <div style={{ minHeight: 200, maxHeight: 200, display: 'flex', borderRadius: "10px", justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(to top, #ffffff, #EFFFEF)', }}>
                                        <img
                                            alt="example"
                                            src={product.image}
                                            style={{ maxWidth: product.width, margin: '8px', objectFit: 'contain', }}
                                        />
                                    </div>
                                </Link>
                            }
                        >
                            <div>
                                <Meta
                                    title={product.name}
                                />
                                <div className='flex justify-between items-center mt-2'>
                                    <p>{`$${product.price}`}</p>
                                    <PlusCircleIcon className="h-6 w-6 text-primary cursor-pointer" onClick={() => {
                                        dispatch(addProduct({ ...product, quantity: 1 }));
                                        success(); // Call the success function after dispatching the action
                                    }} />
                                </div>
                            </div>
                        </Card>
                    )}
                </div >
            </div>
        </div>
    )
}

export default CategoryPage