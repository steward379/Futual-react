import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./styles.scss";

const NewsTicker = () => {
  return (
    <>
      <Swiper
        allowTouchMove={false}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        speed={9000}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 100,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          1200: {
            slidesPerView: 2,
          },
        }}
      >
        <swiper-wrapper className="no-select">
          <SwiperSlide>
            <span className="banner no-select">FUTUAL</span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="banner no-select">FUTUAL</span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="banner no-select">FUTUAL</span>
          </SwiperSlide>
          <SwiperSlide>
            <span className="banner no-select">FUTUAL</span>
          </SwiperSlide>
        </swiper-wrapper>
      </Swiper>
    </>
  );
};

NewsTicker.displayName = "NewsTicker";

export default NewsTicker;
