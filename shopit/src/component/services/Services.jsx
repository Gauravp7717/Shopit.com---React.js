import React from 'react'
import { FaCarSide } from 'react-icons/fa'
import { FaWallet } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import { FaHeadphonesAlt } from 'react-icons/fa'



const ServicesData =[
    {
        id:1,
        icon:<FaCarSide className='text-4xl md:text-5xl text-primary' />,
        tittle:"Free Shipping",
        description:"Free shipping on all orders",
    },
    {
        id:2,
        icon:<FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
        tittle:"Safe money",
        description:"Secured transitions",
    },
    {
        id:4,
        icon:<FaWallet className='text-4xl md:text-5xl text-primary' />,
        tittle:"Online suppor 24/7",
        description:"Best customer care service",
    },
    {
        id:3,
        icon:<FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
        tittle:"secure payment methods",
        description:"various payment options available",
    },
]

const Services = () => {
  return (
    <div>
        <div className="container my-14 md:my-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {
                    ServicesData.map((data)=>(
                        <div className='flex flex-col items-start sm:flex-row gap-4 cursor-pointer'>
                            {data.icon}
                            <div>
                                <h1 className='lg:text-xl font-bold'>{data.tittle}</h1>
                                <h1 className='text-gray-500 text-sm'>{data.description}</h1>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Services;