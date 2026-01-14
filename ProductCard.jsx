import React from 'react'
import { useAppContext } from '@/context/AppContext'
import Link from 'next/link'

const ProductCard = ({ id, image, name, price, description }) => {
    const { currency } = useAppContext();

    // FIX: Your MongoDB stores images as an array: ["url"]
    // We must take the first element image[0]
    const displayImage = Array.isArray(image) && image.length > 0 ? image[0] : image;

    return (
        <div className='bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col h-full'>
            {/* Product Image Holder */}
            <div className='bg-[#f9f9f9] rounded-xl flex justify-center items-center h-48 mb-4 overflow-hidden'>
                <img
                    src={displayImage}
                    className='object-contain h-32 hover:scale-110 transition-transform duration-300'
                    alt={name}
                    // This ensures if the URL is ever wrong, it won't break the layout
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150' }}
                />
            </div>

            {/* Product Details */}
            <div className='flex flex-col flex-grow'>
                <h3 className='text-sm font-semibold text-gray-800 line-clamp-1'>{name}</h3>
                <p className='text-xs text-gray-500 mt-1 line-clamp-2 h-10'>{description}</p>

                <div className='flex items-center justify-between mt-4'>
                    <p className='text-lg font-bold'>{currency}{price}</p>
                    <Link href={`/product/${id}`}>
                        <button className='text-[11px] px-4 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all'>
                            Buy now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard