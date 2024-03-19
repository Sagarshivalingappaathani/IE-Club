'use client';

import { Carousel } from 'flowbite-react';
import Navbar from './Navbar';

export default function Component() {
  return (
    <>
      <div className="lg:h-screen h-60">
        <Carousel autoplay pauseOnHover>
          <img src="/hero3.jpg" alt="..." />
          <img src="/hero4.jpg" alt="..." />
          <img src="/hero5.jpg" alt="..." />
        </Carousel>
      </div>
    </>
  );
}
