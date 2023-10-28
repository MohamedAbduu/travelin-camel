import React from 'react'
import bali from '../assets/bali.jpg'
import coron from '../assets/coron.jpg'
import puertoescondido from '../assets/puertoescondido.jpg'
import yogyakarta from '../assets/yogyakarta.jpg'
import sancristobaldelascasas from '../assets/sancristobaldelascasas.jpg'


const Destinations = () => {
  return (
    <div className='max-w-[1240] mx-auto py-16 px-4 text-center'>
        <h1>We've been there </h1>
        <p>Places you will be saving money if you dare to travel!</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap02 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={coron} alt="" />
            <img className='w-full h-full object-cover' src={bali} alt="" />
            <img className='w-full h-full object-cover' src={yogyakarta} alt="" />
            <img className='w-full h-full object-cover' src={puertoescondido} alt="" />
            <img className='w-full h-full object-cover' src={sancristobaldelascasas} alt="" />
            
            
            
        </div>
        
    </div>
  )
}

export default Destinations