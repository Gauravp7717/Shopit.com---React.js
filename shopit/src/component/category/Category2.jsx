import React from 'react'
import image1 from "/src/assets/category/gaming.png";
import image2 from "/src/assets/category/vr.png";
import image3 from "/src/assets/category/speaker.png";
import Button from '../Button';

const Category2 = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* first col */}
                <div className=' col-span-2 py-10 pl-8 bg-gradient-to-br from-gray-500/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4 space-y-2'>
                            <p className='mb-[2px] text-white font-bold'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-90 mb-2'>GAMING</p>
                            <Button
                            text="Browse"
                            bgColor="bg-primary"
                            textColor="text-white"
                             />
                        </div>
                    </div>
                    <img src={image1} alt=""
                    className='w-[380px] absolute top-1/2 -translate-y-1/2 -right-0'
                    />
                </div>

                {/* second col */}
                <div className='py-10 pl-8 bg-gradient-to-br from-brandgreen/90 to-brandgreen/90 text-white rounded-3xl relative h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white font-bold'>Enjoy</p>
                            <p className='text-2xl font-bold mb-[2px]'>with</p>
                            <p className='text-5xl xl:text-6xl font-bold opacity-70 mb-2'>VR</p>
                            <Button
                            text="Browse"
                            bgColor="bg-white"
                            textColor="text-brandgreen"
                             />
                        </div>
                    </div>
                    <img src={image2} alt=""
                    className='w-[250px] absolute -right-1 lg:top-[10px] '
                    />
                </div>
                {/* third col */}
                <div className='py-10 pl-8 bg-gradient-to-br from-brandblue to-brandblue/90 text-white rounded-3xl relative h-[320px] flex items-start '>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-2'>Speakers</p>
                            <Button
                            text="Browse"
                            bgColor="bg-primary"
                            textColor="text-white"
                             />
                        </div>
                    </div>
                    <img src={image3} alt=""
                    className='w-[250px] absolute -right-0 bottom-0 '
                    />
                </div>
            </div>
        </div>
    </div>
  )
}


export default Category2;