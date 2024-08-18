import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { TbBrandLeetcode } from "react-icons/tb";


const FooterLinks=[
  {
    title: "Home",
    link :"/#",
  },
  {
    title: "About",
    link :"/#about",
  },
  {
    title: "Contact",
    link :"/#conatact",
  },
  {
    title: "Blog",
    link :"/#blog",
  },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* company details  */}
                <div className='py-8 px-4 '>
                <a href='#'
                    className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>shopIt
                </a>
                <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                  This is the E-com web-site Created with vite + React framework.
                  Its totally responsive ❤️ and Good to USe. <br />
                  Creator -<h4 className='font-bold dark:text-white'>GAURAV PATIL</h4>
                  Sub - Front end works
                </p>
                <a href="https://www.linkedin.com/in/gaurav-patil7717/"
                target='_blank'
                className='inline-block bg-primary/90 text-white rounded-full py-2 px-4 mt-4'
                >Visit My LINKEDIN Profile</a>
                </div>

                {/* footer links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-3'>
                  <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Important links</h1>
                    <ul className='space-y-3'>
                      {
                        FooterLinks.map(
                          (data,index) => (
                            <li key={index}>
                                <a href={data.index}
                                className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black cursor-pointer'
                                >
                                  {data.title}
                                </a>
                            </li>
                          )
                        )
                      }
                    </ul>
                  </div>
                  <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Important links</h1>
                    <ul className='space-y-3'>
                      {
                        FooterLinks.map(
                          (data,index) => (
                            <li key={index}>
                                <a href={data.index}
                                className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black cursor-pointer'
                                >
                                  {data.title}
                                </a>
                            </li>
                          )
                        )
                      }
                    </ul>
                  </div>
                  {/* company address  */}
                  <div className='py-8 px-4 col-span-2 sm:col-auto'>
                  <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                    <div>
                      <div className="flex items-center gap-3">
                            <FaLocationDot />
                            <p>Pune, Wagholi</p>
                      </div>
                      <div className="flex items-center gap-3">
                      <FaMobileAlt />
                            {/* <p>Maharashtra , India </p> */}
                            <p>+91- 5555444477</p>
                      </div>
                      <div className="flex items-center gap-3">
                      {/* <FaMobileAlt /> */}
                            <p>Maharashtra , India </p>
                            {/* <p>+91- 5555444477</p> */}
                      </div>

                      <div>
                        <a href="
                        https://github.com/Gauravp7717"
                        target='_blank'
                        className='inline-block flex items-center gap-5 bg-primary/70 rounded-full py-2 px-4 mt-4 text-white'>
                          <FaGithub />
                          Github
                        </a>
                      </div>
                      
                    </div>

                  </div>
                </div>            
            </div>
        </div>
    </div>
  )
}


export default Footer;