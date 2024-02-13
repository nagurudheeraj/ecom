import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import ProductsData from '../../Redux/productsData';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/features/addToCartSlice';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Card, message } from 'antd';
import ViewAllCard from './ViewAllCard';
const { Meta } = Card;

const ProductCard = ({ type }) => {
    console.log({type});
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        console.log("kkk");
        messageApi.open({
            type: 'success',
            content: 'Item added to cart.',
        });
    };

    return (
        <div className='grid grid-cols-4 gap-16 justify-between items-center'>
            {contextHolder}
            {ProductsData[type].slice(0, 4).map((product, index) => (
                index < 3 ? (
                    <Card
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
                ) : (<ViewAllCard link={"product/category/" + type.toLowerCase().replaceAll(" ", "-")} />)
            ))}
        </div >
    );
}

export default ProductCard;
