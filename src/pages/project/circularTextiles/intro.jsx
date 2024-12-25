// import TextAnimate from "Components/textAnimate";
import Intro_sm from "Assets/img/projects/textiles/pic 390.svg";
import Intro_md from "Assets/img/projects/textiles/pic 768.svg";
import Intro_lg from "Assets/img/projects/textiles/pic 1440.svg";
import SdgsItem from "Components/SdgsItem";
import BackgroundColorAnimation from "Components/BackgroundColorAnimation";

const Intro = () => {
  return (
    <div className="relative mb-[140px] mt-[102px] w-full px-[22px] sm:mb-[160px] sm:mt-[120px] md:mb-[200px] md:mt-[140px]">
      <img
        src={Intro_sm}
        className="mx-auto w-[280px]  sm:hidden"
        alt="Intro"
        loading="lazy"
      />
      <img
        src={Intro_md}
        className="mx-auto hidden w-[360px] sm:block md:hidden"
        alt="Intro"
        loading="lazy"
      />
      <img
        src={Intro_lg}
        className="mx-auto hidden w-[400px] md:block"
        alt="Intro"
        loading="lazy"
      />
      {/* <TextAnimate customClassName="title_e_small text-center sm:text-[50px] md:text-[54px]">
        Intro
      </TextAnimate> */}
      <h3 className="title_e_small text-center sm:text-[50px] md:text-[54px]">
        Intro
      </h3>
      <div className="relative">
        <BackgroundColorAnimation
          colorLeft="bg-[#608E8F]"
          colorRight="bg-[#B7AAD1]"
          opacityLeft={0.2}
          opacityRight={0.2}
          translateXLeft="0%"
          translateXRight="0%"
          translateXRightSm="20%"
        />
        <p className="body_medium relative mx-auto mb-[50px] mt-[20px] sm:mb-[40px] sm:mt-[24px] sm:max-w-[486px] md:mb-[70px] md:mt-[30px] md:max-w-[694px] md:text-[16px] ">
          我們與循環台灣基金會合作推出循環紡織報告書，聚焦台灣紡織業如何轉型至循環經濟模式，減少資源消耗與環境衝擊。報告以圖解、排版和2023流行色為主視覺，幫助讀者理解關鍵概念。此轉型不僅回應全球淨零排放承諾，也提升台灣紡織業的競爭力。
        </p>
        <div className="relative">
          <SdgsItem numbers={[12, 13, 15]} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
