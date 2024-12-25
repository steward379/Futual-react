// import TextAnimate from "Components/textAnimate";
import Intro_sm from "Assets/img/projects/forestSchool/pic 390.svg";
import Intro_md from "Assets/img/projects/forestSchool/pic 768.svg";
import Intro_lg from "Assets/img/projects/forestSchool/pic 1440.svg";
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
          colorLeft="bg-[#78C54D]"
          colorRight="bg-[#FFE234]"
          opacityLeft={0.2}
          opacityRight={0.2}
          translateXLeft="0%"
          translateXRight="0%"
          translateXRightSm="20%"
        />
        <p className="body_medium relative mx-auto mb-[50px] mt-[20px] sm:mb-[40px] sm:mt-[24px] sm:max-w-[486px] md:mb-[70px] md:mt-[30px] md:max-w-[694px] md:text-[16px] ">
          為配合行政院策略，我們與國泰人壽合作製作了「森林小學堂」影片，涵蓋反毒、減塑及校園安全三大主題。影片角色以台灣特有種領角鴞設計，透過生動故事傳達知識。我們還製作教育素材和周邊產品，幫助學校宣導識毒、拒毒及反毒觀念，並強化學生對減塑和校園安全的認識，目標是打造無毒、健康、環保的校園環境。
        </p>
        <div className="relative">
          <SdgsItem numbers={[4, 14]} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
