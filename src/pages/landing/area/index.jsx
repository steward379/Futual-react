import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { throttle } from "lodash";
import AreaTagSwiper from "Components/areaTagSwiper";
import ProjectSwiper from "Components/projectSwiper";
import TextAnimate from "Components/textAnimate";
import TotalBackground from "./background";
import TextContent from "./textContent";

const StyledComponent = styled.div`
  transition: opacity 0.3s;
  opacity: ${props => props.opacityRatio}%;
`;

const Area = () => {
  const [opacityRatio, setOpacityRatio] = useState(100);
  const [isSticky, setIsSticky] = useState(true);
  const [isSwiperWheel, setIsSwiperWheel] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
  
      const fifthBlockStart = 7 * windowHeight;
      const fifthBlockEnd = 9 * windowHeight;
      const fadeOutStart = fifthBlockEnd - 50;
      const fadeOutEnd = fifthBlockEnd;
  
      if (currentScrollY >= fifthBlockStart && currentScrollY <= fifthBlockEnd) {
        const scrollPercentage = (currentScrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart);
        const ratio = Math.max(0, Math.min(100, 100 - Math.round(scrollPercentage * 100)));
        setIsSticky(true);
        setOpacityRatio(ratio);
        setIsSwiperWheel(currentScrollY > 7.1 * windowHeight);
      } else if (currentScrollY > fifthBlockEnd) {
        setIsSticky(false);
        setOpacityRatio(0);
        setIsSwiperWheel(false);
      } else {
        setIsSticky(true);
        setOpacityRatio(100);
        setIsSwiperWheel(false);
      }
    }, 100);
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  const memoizedTotalBackground = useMemo(() => <TotalBackground />, []);
  const memoizedTextContent = useMemo(() => <TextContent />, []);
  const memoizedAreaTagSwiper = useMemo(() => <AreaTagSwiper />, []);
  const memoizedProjectSwiper = useMemo(() => <ProjectSwiper isSwiperWheel={isSwiperWheel} />, [isSwiperWheel]);

  const memoizedTextAnimate = useMemo(() => (
    <TextAnimate
      isTitle
      customClassName="text-left font-jost text-[39px] font-normal leading-[180%] tracking-[0.1em] text-pure_white opacity-[0.6] nav_md:text-[80px] xl:text-[120px]"
    >
      ENVIRONMENT
    </TextAnimate>
  ), []);

  return (
    <div className={`${isSticky ? "sticky top-0" : "relative"} z-20 h-full`}>
      <StyledComponent opacityRatio={opacityRatio}>
        {memoizedTotalBackground}
        <div className="relative mx-auto h-[200vh] pl-0 pt-[65px] lg:container nav_md:pt-[44px] xl:px-[78px] xl:pt-[50px]">
          <div className="absolute left-[18px] top-[65px] nav_md:left-[24px] xl:left-[78px] xl:top-[50px] ">
            <h3>
              {memoizedTextAnimate}
            </h3>
          </div>
          <div className="flex h-full flex-col justify-start sm:block xl:flex xl:w-[1334px] xl:flex-row xl:justify-between xl:gap-[29px]">
            <div className="mt-[33px] nav_md:mt-[114px] xl:mt-[163px] xl:flex xl:justify-between">
              <div className="pb-0 pl-[23px] sm:pb-[50px] nav_md:pb-[64px] nav_md:pl-[60px] lg:pl-[0px] xl:w-[450px]">
                {memoizedTextContent}
                <div className="h-[24px] sm:h-[34px] md:h-[40px]" />
                <div data-aos="fade-in" data-aos-delay="1000">
                  {memoizedAreaTagSwiper}
                </div>
              </div>
            </div>
            <div className="pb-[20px] sm:pb-[115px] sm:pt-[34px] md:pt-[89px] lg:pt-[0px] xl:w-[840px] xl:pb-[70px] xl:pt-[390px]">
              {memoizedProjectSwiper}
            </div>
          </div>
        </div>
      </StyledComponent>
    </div>
  );
};

export default Area;
