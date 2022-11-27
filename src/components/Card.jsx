import React, { useEffect, useState } from 'react'
import mobileProduct from '../assets/image-product-mobile.jpg'
import desktopProduct from '../assets/image-product-desktop.jpg'

const Card = () => {

   


    

  return (
    <div className='bg-white  rounded-xl max-w-md overflow-hidden grid md:grid-cols-2 md:max-w-[800px]'>
        <div>
            <img className='w-full h-[400px] md:h-full object-cover' src={desktopProduct} alt="../assets/image-product-mobile.jpg" />
        </div>
        <div className='px-8 py-10'>
            <h1 className='text-gray-500 font-montserrat tracking-[.3em] text-base'>PERFUME</h1>
            <h1 className='mt-3 font-montserrat font-bold text-4xl md:text-5xl md:mt-5'>Gabrielle Essence Eau De Parfum</h1>
            <p className='mt-6 text-gray-500 text-xl font-montserrat leading-relaxed md:mt-8'>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL. </p>
            <div className='flex gap-3 items-center mt-8'>
                <h1 className='text-4xl text-green-700 font-mono'>$149.99</h1>
                <h1 className='text-sm line-through text-gray-500'>$169.99</h1>
            </div>
            <div className='bg-green-700 mt-8 py-3 flex items-center justify-center gap-3 rounded-xl cursor-pointer active:scale-105 transition-all duration-100'>
            <i className="fa-solid fa-cart-shopping text-white"></i>
            <p className='text-white text-lg'>Add to Cart</p>
            </div>
        </div>
    </div>
  )
}

export default Card