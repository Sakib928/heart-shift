import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/images/food.jpg";
import slide2 from "../../../assets/images/clothes.jpg";
import slide3 from "../../../assets/images/drink.jpg";
import slide4 from "../../../assets/images/electronics.jpg";

import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="h-auto">
      <div className="absolute  z-10 text-white left-[40px] md:left-[80px] lg:left-1/4 top-1/4 md:top-1/2 md:space-y-4">
        <h1 className="leading-relaxed anton text-4xl md:text-6xl lg:text-7xl font-bold">
          Discover your <br />{" "}
          <span className="text-[#00989E]">alternative</span> product
        </h1>
        <p className="lg:text-lg">
          Join thousands of others and become an ethical consumer today.
        </p>
        <p className="lg:text-lg">
          Learn how to use your spending power to help change the world for the
          better.
        </p>
        <button className="btn bg-[#00989E] border-none text-white hover:bg-[#2BBFC3]">
          View Products
        </button>
      </div>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper"
        loop:infinity
      >
        <SwiperSlide className="text-center">
          <img className="darkened-image" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="darkened-image" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="darkened-image" src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="darkened-image" src={slide4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
