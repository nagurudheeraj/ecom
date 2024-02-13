import React from 'react'
import Title from '../Utils/Title'

import { Tabs } from 'antd';
import ProductCard from '../Utils/ProductCard';


const items = [
  {
    key: '1',
    label: 'All',
    children: <ProductCard type="all" />,
  },
  {
    key: '2',
    label: 'Skin Care',
    children: <ProductCard type="skin care" />
  },
  {
    key: '3',
    label: 'Hair Care',
    children: <ProductCard type="hair care" />,
  },
  {
    key: '4',
    label: 'Body',
    children: <ProductCard type="body" />,
  },
  {
    key: '5',
    label: 'Baby',
    children: <ProductCard type="baby" />,
  },
  {
    key: '6',
    label: 'Oils',
    children: <ProductCard type="oils" />,
  },
];

const onChange = (key) => {
  console.log(key);
};

const Products = () => {
  return (
    <>
      <div className='mt-32 my-16' id="Shop">
        <Title>Our Products</Title>
        <Tabs defaultActiveKey="1" centered items={items} onChange={onChange} className='mx-32 mt-8 custom-tabs' />
      </div>
    </>
  )
}

export default Products
