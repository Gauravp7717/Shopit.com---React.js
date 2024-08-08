import React from 'react'
import Heading from './Heading';
import ProductCard from './ProductCard';
import img1 from "/src/assets/product/p-1.jpg";
import img2 from "/src/assets/product/p-2.jpg";
import img3 from "/src/assets/product/p-3.jpg";
import img4 from "/src/assets/product/p-4.jpg";


const Productsdata =[
    {
        id:1,
        img :img1,
        title :"headphones",
        price :"5000",
        aosDelay : "600"   
    },
    {
        id:2,
        img :img2,
        title :"headphones",
        price :"5000",
        aosDelay : "600"   
    },
    {
        id:3,
        img :img3,
        title :"headphones",
        price :"5000",
        aosDelay : "600"   
    },
    {
        id:4,
        img :img4,
        title :"headphones",
        price :"5000",
        aosDelay : "600"   
    },
];


const Products = () => {
  return (
    <div>
        <div className='container'>
            {/* header section  */}
            <Heading title={"Our Products"} subtitle={"Explore Our Products"}/>
            {/* body section  */}
            <ProductCard data={Productsdata} />
        </div>
    </div>
  )
}


export default Products;