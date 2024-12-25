import { useEffect, useRef } from "react";
import StarIcon from "Assets/svg/icon_star.svg";
import Blue_mouse from "Assets/svg/blue_mouse.svg";
import Green_mouse from "Assets/svg/green_mouse.svg";
import CTA_vid from "Assets/mp4/cta vid.mp4";
import CustomButton from "Components/buttonText";

const CallToAction = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="relative mx-auto mt-[120px] flex h-[560px] w-[calc(100%-24px)] md:w-[calc(100%-28px)] flex-col items-center justify-start pt-[40px] sm:mt-[140px] md:pt-[50px]">
      <video
        ref={videoRef}
        className="absolute left-0 top-0 h-full w-full rounded-[26px] object-cover md:rounded-[30px]"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        <source src={CTA_vid} type="video/mp4" />
      </video>
      <div className="absolute right-[24px] top-[443px] sm:top-[416px] nav_md:right-[112px] lg:right-[137px] lg:top-[206px]">
        <img src={Blue_mouse} alt="Blue Mouse" />
      </div>
      <div className="absolute left-[24px] top-[84px] sm:top-[229px] nav_md:left-[92px] lg:left-[241px] lg:top-[119px]">
        <img src={Green_mouse} alt="Green Mouse" />
      </div>
      <h2 className="relative mb-[24px] mt-[10px] text-center font-jost text-[30px] font-regular leading-[160%] tracking-[0.08em] text-pure_white sm:mb-[26px] sm:text-[36px] md:mb-[30px] md:text-[44px]">
        <span className="hidden md:block">Together, We Design Tomorrow!</span>
        <span className="hidden sm:block md:hidden">
          Together,
          <br />
          We Design Tomorrow!
        </span>
        <span className="hidden xs:block sm:hidden">
          Together,
          <br />
          We Design
          <br />
          Tomorrow!
        </span>
      </h2>
      <div className="flex items-center gap-[8px] rounded-[14px] border-[1.5px] border-[rgba(255,255,255,0.4)] bg-[rgba(20,20,20,0.4)] px-[16px] pb-[6px] pt-[4px] backdrop-blur-[2px] backdrop-filter sm:px-[17px] md:gap-[10px] md:rounded-[16px] md:px-[20px] md:pt-[5px]">
        <img
          src={StarIcon}
          alt="Star Icon"
          className="h-[21.63px] w-[21.63px] sm:h-[22.63px] sm:w-[22.63px] md:h-[24.63px] md:w-[24.63px]"
        />
        <p className="font-noto text-[14px] font-[400] leading-[200%] tracking-[0.08em] text-pure_white sm:text-[15px] md:text-[16px]">
          聯繫 Futual，以設計產出永續解方
        </p>
      </div>
      <div className="relative mt-[60px] flex justify-center md:mt-[80px]">
        <div className="relative ml-3 mr-3 flex items-center justify-center border-[1.5px] border-[rgba(255,255,255,0.8)] p-[16px] sm:border-[1px] sm:p-[13px] md:border-[1.2px] md:p-[14px]">
          <div className="absolute left-[-6px] top-[-6px] rounded-full bg-pure_white xs:h-[8px] xs:w-[8px] sm:h-[10px] sm:w-[10px] md:h-[12px] md:w-[12px]" />
          <div className="absolute right-[-6px] top-[-6px] rounded-full bg-pure_white xs:h-[8px] xs:w-[8px] sm:h-[10px] sm:w-[10px] md:h-[12px] md:w-[12px]" />
          <div className="absolute bottom-[-6px] left-[-6px] rounded-full bg-pure_white xs:h-[8px] xs:w-[8px] sm:h-[10px] sm:w-[10px] md:h-[12px] md:w-[12px]" />
          <div className="absolute bottom-[-6px] right-[-6px] rounded-full bg-pure_white xs:h-[8px] xs:w-[8px] sm:h-[10px] sm:w-[10px] md:h-[12px] md:w-[12px]" />
          <a
            href="https://forms.gle/Eky81hoQnJbfBX3C6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton
              className="flex items-center justify-center
                              rounded-[70px] bg-grad_1
                              p-[10px_20px_13px_20px] shadow-[0px_10px_10px_0px_rgba(20,20,20,0.30)]
                              transition duration-100
                              ease-in-out 
                              xs:h-[70px] 
                              xs:w-[210px] sm:h-[76px] sm:w-[230px] md:h-[80px]
                              md:w-[250px]"
              textClassName="font-jost font-medium italic text-pure_white
                              xs:text-[18px] xs:leading-[160%] xs:tracking-[1.44px]
                              sm:text-[20px] sm:leading-[160%] sm:tracking-[1.6px]
                              md:text-[22px] md:leading-[160%] md:tracking-[1.76px]"
            >
              Contact Us
            </CustomButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
