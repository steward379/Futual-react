import ProjectBanner from "Components/projects/banner";
import Banner_lg from "Assets/img/projects/forestSchool/hero 1440.jpg";
import Banner_md from "Assets/img/projects/forestSchool/hero 768.jpg";
import Banner_sm from "Assets/img/projects/forestSchool/hero 390.jpg";
import Icon from "Assets/img/projects/forestSchool/forestSchool_icon.jpg";

const Banner = () => {
  return (
    <ProjectBanner
      bannerImage_lg={Banner_lg}
      bannerImage_md={Banner_md}
      bannerImage_sm={Banner_sm}
      iconImage={Icon}
      tagList={["企業CSR", "生態保育", "學校教育"]}
      title={`國泰人壽\n森林小學堂教育動畫`}
      subtitle="Forest School"
      category="SDG4"
      categoryColor="#C22032"
      description="教育設計·動畫設計·角色設計"
    />
  );
};

export default Banner;
