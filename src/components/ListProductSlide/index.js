import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import React from "react";
// MY IMPORTS
import ProductItem from "../ProductItem";
function ListProductSlide({
  products = [],
  spaceBetween,
  slidesPerView,
  navigation,
  scrollbar,
  delay,
  breakpoints,
  hiddenSold = false,
  hiddenDesc = false,
  cart = false,
}) {
  console.log("[COMP] ListProductSlide - re-render");
  return (
    <Swiper
      spaceBetween={spaceBetween || 10}
      slidesPerView={slidesPerView || 4}
      navigation={navigation || true}
      scrollbar={scrollbar || true}
      modules={[Navigation, Autoplay, Scrollbar]}
      autoplay={{ delay: delay || 1000 * 60 * 20 }}
      breakpoints={breakpoints ? breakpoints : {}}
      className="list-product-slide"
    >
      {products &&
        products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductItem
              product={product}
              hiddenSold={hiddenSold}
              hiddenDesc={hiddenDesc}
              cart={cart}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default React.memo(ListProductSlide);
