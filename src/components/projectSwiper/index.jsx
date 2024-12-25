import { useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";
// import circle_point from "Assets/img/circle_point.png";
// import circle_arrow from "Assets/img/circle_arrow.png";
import { useModal } from "Store/modalContext";
import { ProjectList } from "Constants/projectList";

import "swiper/css";
import "./styles.scss";

const ProjectSwiper = ({ isSwiperWheel = false }) => {
  const { openModal, setModal } = useModal();
  const scrollAccumulatorRef = useRef(0);
  const lastDirectionRef = useRef(null);
  const swiperRef = useRef(null);
  const scrollThreshold = 100;

  const handleScroll = useCallback(
    (deltaY) => {
      if (isSwiperWheel && swiperRef.current && swiperRef.current.swiper) {
        const direction = deltaY > 0 ? "down" : "up";
        if (direction !== lastDirectionRef.current) {
          lastDirectionRef.current = direction;
          scrollAccumulatorRef.current = deltaY;
        } else {
          scrollAccumulatorRef.current += deltaY;
          if (Math.abs(scrollAccumulatorRef.current) >= scrollThreshold) {
            if (scrollAccumulatorRef.current > 0) {
              swiperRef.current.swiper.slideNext();
            } else {
              swiperRef.current.swiper.slidePrev();
            }
            scrollAccumulatorRef.current = 0;
          }
        }
      }
    },
    [isSwiperWheel, scrollThreshold]
  );

  const handleWheel = useCallback(
    (e) => {
      handleScroll(e.deltaY);
    },
    [handleScroll]
  );

  useEffect(() => {
    let startY;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!startY) return;
      const deltaY = startY - e.touches[0].clientY;
      handleScroll(deltaY);
      startY = null;
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleWheel, handleScroll]);

  return (
    // <div className="swiper-mask-project">
      <Swiper
        ref={swiperRef}
        className="lg:w-[840px]"
        modules={[Navigation]}
        slidesPerView={1.3}
        slidesOffsetBefore={35}
        spaceBetween={30}
        breakpoints={{
          450: {
            slidesPerView: 1.5,
            slidesOffsetBefore: 35,
          },
          480: {
            slidesPerView: 1.6,
            slidesOffsetBefore: 35,
          },
          500: {
            slidesPerView: 1.7,
            slidesOffsetBefore: 35,
          },
          600: {
            slidesPerView: 2,
            slidesOffsetBefore: 35,
          },
          700: {
            slidesPerView: 2.2,
            slidesOffsetBefore: 35,
          },
          768: {
            slidesPerView: 2.7,
            slidesOffsetBefore: 35,
          },
          976: {
            slidesPerView: 3,
            slidesOffsetBefore: 0,
          },
        }}
      >
        <swiper-wrapper>
          {ProjectList.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="project-item">
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    setModal(item.id);
                    openModal();
                  }}
                >
                  <div className="card relative">
                    <img
                      className="img h-full w-full object-cover"
                      src={item.img}
                      alt={item.id}
                    />
                    <div className="absolute z-20 flex h-full w-full flex-col justify-between">
                      <div className="flex justify-between p-[8px]">
                        <div className="rounded-full bg-[#14141466] px-[10px] pb-[3px] pt-[2px] font-noto text-[11px] font-[400] leading-[1.6em] tracking-[0.08em] text-pure_white">
                          {item.title_tag}
                        </div>
                        {/* <img src={circle_point} alt="circle_point" /> */}
                      </div>
                    </div>
                    <div className="content font-noto">
                      <div className="w-full pl-[20px] text-left leading-[160%] tracking-[0.08em] text-pure_white">
                        <p className="text-[18px] font-[400]">{item.title}</p>
                        <p className="text-[11px] font-[400]">
                          {item.text}
                        </p>
                      </div>
                      <div className="tag flex items-center gap-x-[7px]">
                        {item.tag.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-[30px] bg-gray_2 px-[11px] py-[3px] text-[11px] font-[400] leading-[160%] tracking-[0.88px] text-gray_5_black"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </swiper-wrapper>
      </Swiper>
    // </div>
  );
};

ProjectSwiper.propTypes = {
  isSwiperWheel: PropTypes.bool,
};

export default ProjectSwiper;
