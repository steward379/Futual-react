import Bag_sm from "Assets/img/projects/forestSchool/bag_390.png";
import Bag_md from "Assets/img/projects/forestSchool/bag_768.png";
import Bag_lg from "Assets/img/projects/forestSchool/bag_1440.png";
import BackgroundColorAnimation from "Components/BackgroundColorAnimation";
import FlexImage from "Components/flexImage";

const pageElement = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-[350px] h-full w-full sm:top-[150px]">
        <BackgroundColorAnimation
          colorLeft="bg-[#78C54D]"
          colorRight="bg-[#FFE234]"
          opacityLeft={0.2}
          opacityRight={0.2}
          translateXLeft="0%"
          translateXRight="0%"
          translateXRightSm="20%"
        />
      </div>
      <div className="relative">
        <FlexImage
          smImage={Bag_sm}
          mdImage={Bag_md}
          lgImage={Bag_lg}
          altName="Bag"
        />
      </div>
    </div>
  );
};

export default pageElement;
