import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
// MY IMPORTS
import "./list-product-slide.scss";
import ProductItem from "../ProductItem";
function ListProductSlide({ products }) {
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
      <SwiperSlide>
        <ProductItem product />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem product />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem product />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem product />
      </SwiperSlide>
      <SwiperSlide>
        <ProductItem product />
      </SwiperSlide>
    </Swiper>
  );
}

export default ListProductSlide;
