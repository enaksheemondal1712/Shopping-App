"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { assets } from '@/assets/assets';
import ProductCard from '@/components/ProductCard';
import { useAppContext } from '@/context/AppContext';

export default function Home() {
  const { products } = useAppContext();

  // Filter the first 10 products for the 'Latest Collection' section
  const latestProducts = products.slice(0, 10);

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />



      {/* --- LATEST COLLECTIONS SECTION --- */}
      <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
          <div className='inline-flex gap-2 items-center mb-3'>
            <p className='text-gray-500'>LATEST <span className='text-gray-700 font-medium'>COLLECTIONS</span></p>
            <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
          </div>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover our newest arrivals designed with premium fabrics and modern cuts.
          </p>
        </div>

        {/* Product Grid (Styled like 00:00:59) */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {latestProducts.map((item, index) => (
            <ProductCard
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.offerPrice}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}