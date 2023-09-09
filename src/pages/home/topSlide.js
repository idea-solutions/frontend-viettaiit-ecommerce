import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { sliders1} from "../../assets/sliders";
import LazyImage from "../../components/LazyImage";
function TopSlide() {
  console.log("[HOME] top slide -- re-render");
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 2000 }}
      className="home__slider"
    >
      {sliders1.map((slider, idx) => (
        <SwiperSlide key={idx}>
          <LazyImage src={slider} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default React.memo(TopSlide);
