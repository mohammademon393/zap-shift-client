import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonster from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  const brandsLogos = [
    amazon,
    amazon_vector,
    casio,
    moonster,
    randstad,
    star,
    start_people,
  ];

  return (
    <div className="mx-6 md:mx-0 my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">We've helped thousands of sales teams</h2>
      <Swiper className=""
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {brandsLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
