import ProjectBanner from "Components/projects/banner";
import Banner_lg from "Assets/img/projects/textiles/hero 1440.jpg";
import Banner_md from "Assets/img/projects/textiles/hero 768.jpg";
import Banner_sm from "Assets/img/projects/textiles/hero 390.jpg";
import Icon from "Assets/img/projects/textiles/textiles_icon.jpg";

const Banner = () => {
  return (
    <ProjectBanner
      bannerImage_lg={Banner_lg}
      bannerImage_md={Banner_md}
      bannerImage_sm={Banner_sm}
      iconImage={Icon}
      tagList={["循環經濟", "綠色轉型"]}
      title={`循環台灣\n2023循環紡織報告`}
      subtitle="Circular Textile"
      category="SDG12"
      categoryColor="#C7882C"
      description="封面設計·資訊設計"
    />
  );
};

export default Banner;
