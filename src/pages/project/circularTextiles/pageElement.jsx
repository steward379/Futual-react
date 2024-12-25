import Page_sm from "Assets/img/projects/textiles/page 390.png";
import Page_md from "Assets/img/projects/textiles/page 768.png";
import Page_lg from "Assets/img/projects/textiles/page 1440.png";
import BackgroundColorAnimation from "Components/BackgroundColorAnimation";
import FlexImage from "Components/flexImage";

const pageElement = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-[350px] h-full w-full sm:top-[150px]">
        <BackgroundColorAnimation
          colorLeft="bg-[#608E8F]"
          colorRight="bg-[#B7AAD1]"
          opacityLeft={0.2}
          opacityRight={0.2}
          translateXLeft="0%"
          translateXRight="0%"
          translateXRightSm="20%"
        />
      </div>
      <div className="relative">
        <FlexImage
          smImage={Page_sm}
          mdImage={Page_md}
          lgImage={Page_lg}
          altName="Page"
        />
      </div>
    </div>
  );
};

export default pageElement;
