import React from 'react'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          {/* Logo - Fixed with .src to resolve the 404 [object Object] error */}
          <img
            src={assets.logo.src || assets.logo}
            className='mb-5 w-32'
            alt="QuickCart Logo"
          />
          <p className='w-full md:w-2/3 text-gray-600'>
            Our platform offers the latest in fashion and technology, ensuring quality and style in every purchase. Shop with confidence and experience the future of e-commerce.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 uppercase'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
            <li className='hover:text-black transition-colors'>Home</li>
            <li className='hover:text-black transition-colors'>About us</li>
            <li className='hover:text-black transition-colors'>Delivery</li>
            <li className='hover:text-black transition-colors'>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 uppercase'>Get in Touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>contact@quickcart.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr className='border-gray-300' />
        <p className='py-5 text-sm text-center text-gray-600'>
          Copyright 2026 © QuickCart.dev - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer