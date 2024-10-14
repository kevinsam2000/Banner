"use client"


import Image from 'next/image';
import image1 from '@/assets/banner/img1.webp';
import image2 from '@/assets/banner/img2.webp';
import image3 from '@/assets/banner/img3.jpg';
import image4 from '@/assets/banner/img4.jpg';
import image5 from '@/assets/banner/img5.webp';
import image9 from '@/assets/banner/img9.jpg';

import image1Mobile from '@/assets/banner/img1_mobile.jpg';
import image2Mobile from '@/assets/banner/img2_mobile.webp';
import image3Mobile from '@/assets/banner/img3_mobile.jpg';
import image4Mobile from '@/assets/banner/img4_mobile.jpg';
import image5Mobile from '@/assets/banner/img5_mobile.png';
import image9Mobile from '@/assets/banner/img9_mobile.jpg';

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const BannerProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const desktopImages = [image1, image2, image3, image4, image5, image9];
  const mobileImages = [image1Mobile, image2Mobile, image3Mobile, image4Mobile, image5Mobile, image9Mobile];

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % desktopImages.length);
  };

  const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + desktopImages.length) % desktopImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className='container mx-auto px-4 rounded'>
      <div className='h-48 md:h-64 w-full bg-slate-200 relative overflow-hidden'>
        {/* Navigation buttons */}
        <div className='absolute z-10 h-full w-full flex items-center justify-between px-4'>
          <button onClick={prevImage} className='bg-white shadow-md rounded-full p-2'>
            <FaAngleLeft aria-label="Previous" />
          </button>
          <button onClick={nextImage} className='bg-white shadow-md rounded-full p-2'>
            <FaAngleRight aria-label="Next" />
          </button>
        </div>

        {/* Desktop and tablet version */}
        <div className='hidden md:flex h-full w-full overflow-hidden'>
          {desktopImages.map((image, index) => (
            <div
              className='w-full h-full min-w-full min-h-full transition-transform duration-500'
              key={index}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <Image src={image} alt={`Banner ${index + 1}`} layout='fill' objectFit='cover' objectPosition='center'/>
            </div>
          ))}
        </div>

        {/* Mobile version */}
        <div className='flex md:hidden h-full w-full overflow-hidden'>
          {mobileImages.map((image, index) => (
            <div
              className='w-full h-full min-w-full min-h-full transition-transform duration-500'
              key={index}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <Image src={image} alt={`Banner ${index + 1}`} layout='fill' objectFit='cover' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BannerProduct;
