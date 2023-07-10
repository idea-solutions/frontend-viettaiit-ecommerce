import AnimationPage from "../../../components/AnimationPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Image } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "./home.scss";
import sliders from "../../../assets/client/slider";
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
          {sliders.map((slider, idx) => (
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
      </div>
    </AnimationPage>
  );
}

export default Home;
