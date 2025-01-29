import { GalleryInfo } from '@/data'
import { CaladeaF } from '@/fonts'
import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <div className=' pt-4 md:pt-6'>
      <h2 
       style={
        {
          fontWeight: 'bolder'
        }
       }
      className={`md:text-5xl text-center text-3xl ${CaladeaF} pb-4 md:pb-10 `}>Some More Reviews</h2>

    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 m-4'>
        {GalleryInfo.map((item, index) => (
            <div  key={index} className='flex items-end justify-center'>
               <Image className='h-full object-bottom
  object-contain w-full' width={1000} height={1000} src={item.url} alt="image" />
            </div>
        ))}
    </div>
    </div>
  )
}

export default Gallery
