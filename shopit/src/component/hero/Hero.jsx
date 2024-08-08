import React from 'react';
import Slider from "react-slick";
import image1 from "/src/assets/hero/headphone.png";
import image2 from "/src/assets/hero/vr.png";
import image3 from "/src/assets/hero/macbook.png";
import Button from '../Button';






const HeroData = [
    {
        id: 1,
        img: image1,
        subtittle: "beast solo",
        tittle: "Wireless",
        tittle2: "Headphone",
         
    },
    {
        id: 2,
        img: image2,
        subtittle: "beast solo",
        tittle: "wireless",
        tittle2: "virtual",
    },
    {
        id: 3,
        img: image3,
        subtittle: "beast solo",
        tittle: "wireless",
        tittle2: "virtual",
    }
]

const Hero = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className='container'>
           <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color  flex justify-center items-center '>

            <div className='container pb-8 sm:pb-0'>
             {/* Hero section */}
             <Slider {...settings}>
                {
                    HeroData.map((data) => (
                        <div key={data.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                            {/* text content section */}
                            <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 '>
                                <h1 className='text-2xl sm:text-3xl lg:text-2xl font-bold'>{data.subtittle}</h1>
                                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.tittle}</h1>
                                <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.tittle2}</h1>
                                <div>
                                   <Button 
                                   text = "shop now "
                                   bgColor="bg-primary"
                                   textColor="text-white"
                                    />
                                </div>
                            </div> 
                            {/* img section */}
                            <div className='order-1 sm:order-2'>
                                <img src={data.img} 
                                className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'
                                alt="" />
                            </div>
                            </div>
                                
                        </div>
                    ))
                }
            </Slider>
            
          </div>
        </div>
        </div>
    );
};

export default Hero;
