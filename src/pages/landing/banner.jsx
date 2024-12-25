import styled from "styled-components";
import NewsTicker from "Components/newsTicker";
import Hero from "Assets/img/Hero_Banner.jpg";
import TextAnimate from "Components/textAnimate";
import ScrollIcon from "Components/scroll";
import BackgroundColorAnimation from "Components/BackgroundColorAnimation";
import "animate.css";

const BannerLayout = styled.div`
  padding: 0 20px;
  min-height: 100dvh;
`;

const handleScroll = () => {
  event.preventDefault();
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
};

const Banner = () => {
  return (
    <BannerLayout className="relative flex items-center justify-center">
      <img
        src={Hero}
        alt="Hero_Banner"
        className="animate__animated animate__fadeIn z-10 h-[300px] w-[300px] rounded-full object-cover sm:h-[400px] sm:w-[400px] md:h-[480px] md:w-[480px]"
      />
      <BackgroundColorAnimation
        translateXLeft="30%"
        translateXLeftMd="-10%"
        translateXLeftSm="-20%"
        translateXRight="-30%"
        translateXRightMd="20%"
        translateXRightSm="30%"
      />
      <div className="absolute w-full">
        <div className="relative flex items-center justify-center">
          <NewsTicker />
          <div className="neon-text absolute -bottom-[12px] z-20 sm:-bottom-[28px] md:-bottom-[30px]">
            <h2>
              <TextAnimate
                isTitle
                customClassName="relative font-jost text-[32px] font-medium leading-[1.6] tracking-[1.28px] sm:text-[44px] sm:tracking-[1.76px] md:text-[54px] md:tracking-[2.16px]"
                style={{ animationDelay: "300ms" }}
              >
                Mutual for Future
              </TextAnimate>
            </h2>
            <p
              className="animate__animated animate__fadeIn font-jost text-[12px] font-medium leading-[1.6] tracking-[1.2px] sm:text-[15px] sm:tracking-[1.5px] md:text-[18px] md:tracking-[1.8px]"
              style={{ animationDelay: "500ms" }}
            >
              Sustainable Design:
              <span className="font-normal">
                Strategy / Innovation / Communication
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[114px] flex w-full flex-col items-center justify-center text-center sm:bottom-[121px] md:bottom-[50px] ">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            handleScroll();
          }}
        >
          <ScrollIcon />
          <p className="mt-[3px] font-sarabun text-[12px] leading-[140%] tracking-[0.04em] italic font-[300] ">Scroll</p>
        </a>
      </div>
    </BannerLayout>
  );
};

Banner.displayName = "Banner";

export default Banner;
