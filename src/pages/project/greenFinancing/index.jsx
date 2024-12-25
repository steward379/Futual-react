import Banner from "./projectBanner";
import Intro from "./intro";
import Bento from "./bento";
import Video from "./video";
import Concept from "./concept";
import Album from "./album";
import Design from "./design";
import Result from "./result";
import Credits from "./credits";

const GreenFinancing = () => {
  return (
    <div className="mx-auto">
      <Banner />
      <Intro />
      <Bento />
      <Video />
      <Concept />
      <Album />
      <Design />
      <Result />
      <Credits />
    </div>
  );
};

export default GreenFinancing;
