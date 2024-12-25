import Banner from "./projectBanner";
import Intro from "./intro";
import Bento from "./bento";
import Video from "./video";
import Design from "./design";

const ForestSchool = () => {
  return (
    <div className="mx-auto">
      <Banner />
      <Intro />
      <Bento />
      <Video />
      <Design />
    </div>
  );
};

export default ForestSchool;
