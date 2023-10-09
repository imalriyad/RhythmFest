import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Artists = () => {
  return (
    <div className="my-5">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/r7c19BY/tylorswift.jpg"
            className="rounded-full border-maincolor border-4 md:w-[250px] md:h-[250px] w-[67px] h-[67px]"
            alt="Taylor Swift"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co/pJWvJpk/thewekeend.jpg"
            className="rounded-full border-maincolor border-4 md:w-[250px] md:h-[250px] w-[67px] h-[67px]"
            alt="The Weeknd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/NpFWwLr/imanginedragon.jpg"
            className="rounded-full border-maincolor border-4 md:w-[250px] md:h-[250px] w-[67px] h-[67px]"
            alt="Imagine Dragons"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/XkmZs0q/justinbiber.jpg"
            className="rounded-full border-maincolor border-4 md:w-[250px] md:h-[250px] w-[67px] h-[67px]"
            alt="Justin Bieber"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/g6g7CLM/alanwalker.jpg"
            className="rounded-full border-maincolor border-4 md:w-[250px] md:h-[250px] w-[67px] h-[67px]"
            alt="Alan Walker"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/FgR18P2/dualipa.jpg"
            className="rounded-full border-maincolor border-4 md:w-[250px] md:h-[250px] w-[67px] h-[67px]"
            alt="Dua Lipa"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Artists;
