"use client";

import { Parallax, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeaderCarousel = ({ images }) => {
  return (
    <section className="w-full relative h-[60vh] px-5 mt-24 mb-12">
      <div className="rounded-3xl overflow-hidden">
        {/* Slider */ }
        <Swiper
          style={ {
            "--swiper-navigation-color": "var(--foreground)",
            "--swiper-pagination-fraction-color": "var(--bgColor)",
            "--swiper-navigation-size": "16px",
          } }
          modules={ [Parallax, Navigation, Pagination] }
          speed={ 2000 }
          slidesPerView={ 2 }
          loop={ true }
          spaceBetween={ 20 }
          centeredSlides={ true }
          rewind={ true }
          navigation={ true }
          pagination={ {
            type: "fraction",
          } }
          breakpoints={ {
            // When the screen width is >= 320px (mobile)
            320: {
              slidesPerView: 1,
            },
            // When the screen width is >= 768px (tablet)
            768: {
              slidesPerView: 2,
            },
            // When the screen width is >= 1024px (desktop)
            1024: {
              slidesPerView: 2,
            },
          } }
        className="mySwiper"
        >
        {/* Map over tour images */ }
        { images.map((image, index) => (
          <SwiperSlide key={ index } className="overflow-hidden">
            <div className="h-[60vh]">
              <Image
                src={ image }
                alt={ `Beautiful landscape featuring ${index + 1}` }
                className="object-cover h-full w-full"
                sizes="100vw"
                width={ 0 }
                height={ 0 }
              />
            </div>
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
    </section >
  );
};

export default HeaderCarousel;