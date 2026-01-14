"use client";
import React from 'react';
import { assets } from '@/assets/assets';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import { UserButton, useUser, SignInButton } from '@clerk/nextjs';

const Navbar = () => {
  const { getCartCount } = useAppContext();
  const { isSignedIn } = useUser();

  return (
    <div className='flex items-center justify-between py-5 font-medium border-b border-gray-300'>
      {/* Logo - Using .src to fix the 404 [object Object] error */}
      <Link href='/'>
        <img src={assets.logo.src || assets.logo} className='w-32' alt="Logo" />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <Link href='/' className='flex flex-col items-center gap-1'><p>HOME</p></Link>
        <Link href='/all-products' className='flex flex-col items-center gap-1'><p>ALL PRODUCTS</p></Link>
        <Link href='/about' className='flex flex-col items-center gap-1'><p>ABOUT</p></Link>
        <Link href='/contact' className='flex flex-col items-center gap-1'><p>CONTACT</p></Link>
      </ul>

      <div className='flex items-center gap-6'>
        {/* Cart Icon - Using .src */}
        <Link href='/cart' className='relative'>
          <img src={assets.cart_icon.src || assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        {/* Login Button - Using SignInButton to fix the 404 error */}
        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton mode="modal">
            <button className='bg-black text-white px-8 py-2 rounded-full text-sm'>Login</button>
          </SignInButton>
        )}
      </div>
    </div>
  );
};

export default Navbar;