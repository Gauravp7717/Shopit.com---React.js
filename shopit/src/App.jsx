import React from 'react'
import { Navbar } from './component/Navbar';
import Hero from './component/hero/Hero';
import Category from './component/category/Category';
import Category2 from './component/category/Category2';
import Services from './component/services/Services';
import Banner from './component/Banner/Banner';


const BannerData ={
  discount:"30% OFF",
  tittle:"Fine Smile",
  date:"1 AUG to 13 AUG",
  image: headphone,
  tittle2:"Air Solo Bass",
  tittle3:"Winnter Sale",
  tittle4:"this is the sale banner",
  bgColor:"#f42c37",
}

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
        <Navbar />
        <Hero />
        <Category />
        <Category2 />
        <Services />
        <Banner data={BannerData} />
    </div>
  )
}


export default App;