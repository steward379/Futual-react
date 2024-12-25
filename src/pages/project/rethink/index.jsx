import Banner from "./projectBanner";
import Intro from "./intro";
import Bento from "./bento";
import Strategy from "./strategy";
import Design from "./design";
import Result from "./result";
import Link from "./link";

const index = () => {
  return (
    <div className="mx-auto">
      <Banner />
      <Intro />
      <Bento />
      <Strategy />
      <Design />
      <Result />
      <Link />
    </div>
  );
};

export default index;
