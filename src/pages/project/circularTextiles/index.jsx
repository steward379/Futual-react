import Banner from "./projectBanner";
import Intro from "./intro";
import Bento from "./bento";
import Book from "./book";
import Detail from "./detail";

const CircularTextiles = () => {
  return (
    <div className="mx-auto">
      <Banner />
      <Intro />
      <Bento />
      <Book />
      <Detail />
    </div>
  );
};

export default CircularTextiles;
