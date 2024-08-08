import React from 'react'
import { Navbar } from './component/Navbar';
import Hero from './component/hero/Hero';
import Category from './component/category/Category';
import Category2 from './component/category/Category2';
import Services from './component/services/Services';
import Banner from './component/Banner/Banner';
import headphone from "/src/assets/hero/headphone.png";
import smartwatch from "/src/assets/category/smartwatch2-removebg-preview.png";
import Products from './component/Products/Products';
import Partners from './component/Partners/Partners';
import Footer from './component/Footer/Footer';

const Bannerdata ={
  discount : "30% OFF",
  title : "Fine Smile",
  Date : "1 AUG to 13 AUG",
  Image: headphone,
  title1 : "Air Solo Bass",
  title2 : "Winter sale",
  title4 : "this is the sale banner for headphones",
  bgColor :"#f42c37",

};
const Bannerdata2 ={
  discount : "40% OFF",
  title : "SMARTWATCH",
  Date : "1 AUG to 28 AUG",
  Image: smartwatch,
  title1 : "BOAT",
  title2 : "Winter sale",
  title4 : "this is the sale banner for smartwatches",
  bgColor :"#2dcc6f",

};

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
        <Navbar />
        <Hero />
        <Category />
        <Category2 />
        <Services />
        <Banner data={Bannerdata}/>
        <Products />
        <Banner data={Bannerdata2}/>
        <Partners />
        <Footer />

    </div>
  )
}


export default App;