import { GalleryInfo } from '@/data'
import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 m-4'>
        {GalleryInfo.map((item, index) => (
            <div  key={index} className='md:h-[400px]'>
               <Image className='h-full  object-cover w-full' width={1000} height={1000} src={item.url} alt="image" />
            </div>
        ))}
    </div>
  )
}

export default Gallery
