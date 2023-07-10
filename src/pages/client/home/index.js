import AnimationPage from "../../../components/AnimationPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Image } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "./home.scss";
import { sliders1, sliders2 } from "../../../assets/client/sliders";
import promoBoxes from "../../../assets/client/promoBox";
function Home() {
  return (
    <AnimationPage>
      <div className="home">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000 }}
          className="home__slider"
        >
          {sliders1.map((slider, idx) => (
            <SwiperSlide key={idx}>
              <Image src={slider} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="promo-box row">
          {promoBoxes.map((item, idx) => (
            <div key={idx} className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div
                className="promo-box__item"
                style={{
                  backgroundColor: `${item.backgroundColor}`,
                }}
              >
                <div className="promo-box__item__left">
                  <Image src={item.image} />
                </div>
                <div className="promo-box__item__right">
                  <small>{item.textTop}</small>
                  <span>{item.textBot}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="section">
          <div className="row mx-1">
            {sliders2.map((image, idx) => (
              <div
                key={idx}
                className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2"
              >
                <Image className="section__item" src={image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimationPage>
  );
}

export default Home;
