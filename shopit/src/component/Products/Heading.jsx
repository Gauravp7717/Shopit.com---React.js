import React from 'react'

const Heading = ({title , subtitle}) => {
  return (
    <div className='text-center md-10 max-w-[600px] mx-auto space-y-2'>
        <h1 className='text-6xl font-bold lg:text-7xl'>{title}</h1>
        <p className='text-xl text-gray-400'>{subtitle}</p>
    </div>
  )
}



export default Heading;