import { Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import LazyImage from "../../components/LazyImage";

function DanhMucNoiBat() {
  return (
    <div className="container mt-5 danhmucnoibat">
      <h3 className="text-uppercase text-center mb-4">DANH MỤC NỔI BẬT</h3>
      <Swiper
        spaceBetween={25}
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
            slidesPerView: 6,
            spaceBetween: 25,
          },
        }}
      >
        <SwiperSlide>
          <Col className="item">
            <div className="border-1 d-flex flex-column gap-1 align-items-center">
              <LazyImage
                src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/cate_1.png?1691030040351    "
                alt=""
              />
              <span className="mt-2 text-size-16">Iphone</span>
            </div>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="item">
            <div className="border-1 d-flex flex-column gap-1 align-items-center">
              <LazyImage
                src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/cate_1.png?1691030040351    "
                alt=""
              />
              <span className="mt-2 text-size-16">Iphone</span>
            </div>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="item">
            <div className="border-1 d-flex flex-column gap-1 align-items-center">
              <LazyImage
                src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/cate_1.png?1691030040351    "
                alt=""
              />
              <span className="mt-2 text-size-16">Iphone</span>
            </div>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="item">
            <div className="border-1 d-flex flex-column gap-1 align-items-center">
              <LazyImage
                src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/cate_1.png?1691030040351    "
                alt=""
              />
              <span className="mt-2 text-size-16">Iphone</span>
            </div>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="item">
            <div className="border-1 d-flex flex-column gap-1 align-items-center">
              <LazyImage
                src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/cate_1.png?1691030040351    "
                alt=""
              />
              <span className="mt-2 text-size-16">Iphone</span>
            </div>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col className="item">
            <div className="border-1 d-flex flex-column gap-1 align-items-center">
              <LazyImage
                src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/cate_1.png?1691030040351    "
                alt=""
              />
              <span className="mt-2 text-size-16">Iphone</span>
            </div>
          </Col>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default DanhMucNoiBat;
