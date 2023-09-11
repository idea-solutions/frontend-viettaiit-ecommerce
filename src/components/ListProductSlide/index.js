import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import React from "react";
// MY IMPORTS
import ProductItem from "../ProductItem";
function ListProductSlide({ products }) {
  console.log("[COMP] ListProductSlide - re-render");
  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={4}
      navigation={true}
      scrollbar={true}
      modules={[Navigation, Autoplay, Scrollbar]}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        100: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }}
      className="list-product-slide"
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductItem product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default React.memo(ListProductSlide);
