import React from 'react'
import image1 from "/src/assets/category/earphone.png";
import image2 from "/src/assets/category/watch.png";
import image3 from "/src/assets/category/macbook.png";
import Button from '../Button';

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* first col */}
                <div className='py-10 pl-8 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphones</p>
                            <Button
                            text="Browse"
                            bgColor="bg-primary"
                            textColor="text-white"
                             />
                        </div>
                    </div>
                    <img src={image1} alt=""
                    className='w-[320px] absolute bottom-0 '
                    />
                </div>
                {/* second col */}
                <div className='py-10 pl-8 bg-gradient-to-br from-brandyello to-brandyello/90 text-white rounded-3xl relative h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white font-bold'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-70 mb-2'>Watches</p>
                            <Button
                            text="Browse"
                            bgColor="bg-white"
                            textColor="text-brandyello"
                             />
                        </div>
                    </div>
                    <img src={image2} alt=""
                    className='w-[320px] absolute -right-4 lg:top-[0px] '
                    />
                </div>
                {/* third col */}
                <div className=' col-span-2 py-10 pl-8 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4 space-y-2'>
                            <p className='mb-[2px] text-white font-bold'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>LAPTOPS</p>
                            <Button
                            text="Browse"
                            bgColor="bg-white"
                            textColor="text-primary"
                             />
                        </div>
                    </div>
                    <img src={image3} alt=""
                    className='w-[380px] absolute top-1/2 -translate-y-1/2 -right-0'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}


export default Category;