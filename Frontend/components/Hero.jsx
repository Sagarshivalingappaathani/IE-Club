'use client';

import { Carousel, CarouselNav } from 'flowbite-react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import icons from react-icons library

export default function Component() {
  const leftControl = (
    <button className="absolute text-white top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none">
      <FiChevronLeft size={24} /> 
    </button>
  );

  const rightControl = (
    <button className="absolute top-0 text-white right-0 flex h-full items-center justify-center px-4 focus:outline-none">
      <FiChevronRight size={24} />
    </button>
  );

  return (
    <>
      <div className="lg:h-screen h-60">
        <Carousel autoplay pauseOnHover leftControl={leftControl} rightControl={rightControl}>
          <img src="/hero3.jpg" alt="..." />
          <img src="/hero4.jpg" alt="..." />
          <img src="/hero5.jpg" alt="..." />
        </Carousel>
      </div>
    </>
  );
}
