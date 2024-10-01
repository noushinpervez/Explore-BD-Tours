"use client";

import { Parallax, Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Carousel = () => {
  return (
    <div className="w-full relative md:h-[60vh] h-[75vh]">
      {/* Content */ }
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className="text-6xl font-semibold">Love where you&#39;re going</h2>
        <p className="mt-6 text-xl font-bold">Book incredible things to do around the world.</p>
      </div>

      {/* Slider */}
      <Swiper
        modules={ [Parallax, Autoplay, Navigation, EffectFade] }
        speed={ 2000 }
        parallax={ true }
        autoplay={ {
          delay: 3000,
          disableOnInteraction: false,
        } }
        slidesPerView={ "auto" }
        centeredSlides={ true }
        rewind={ true }
        navigation={ false }
        effect={ "fade" }
        className="mySwiper"
      >
        {/* Slide 1 */ }
        <SwiperSlide>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1686651452430-09d14e313868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Beautiful Landscape 1"
              className="object-cover md:h-[60vh] h-[75vh] w-full"
              sizes="100vw"
              width={ 0 }
              height={ 0 }
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */ }
        <SwiperSlide>
          <div className="relative h-[60vh]">
            <Image
              src="https://images.unsplash.com/photo-1596826320302-5b302dc29b75?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Beautiful Landscape 2"
              className="object-cover h-[60vh] w-full"
              sizes="100vw"
              width={ 0 }
              height={ 0 }
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */ }
        <SwiperSlide>
          <div className="relative h-[60vh]">
            <Image
              src="https://images.unsplash.com/photo-1670930371984-d8f47ec55d87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Beautiful Landscape 3"
              className="object-cover h-[60vh] w-full"
              sizes="100vw"
              width={ 0 }
              height={ 0 }
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;