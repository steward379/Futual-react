import Cover_sm from "Assets/img/projects/textiles/cover 390.jpg";
import Cover_md from "Assets/img/projects/textiles/cover 768.jpg";
import Cover_lg from "Assets/img/projects/textiles/cover 1440.jpg";
import Illustration_sm from "Assets/img/projects/textiles/illustration 390.jpg";
import Illustration_md from "Assets/img/projects/textiles/illustration 768.jpg";
import Illustration_lg from "Assets/img/projects/textiles/illustration 1440.jpg";

import ItemText from "Components/projects/itemText";
import FlexImage from "Components/flexImage";
import PageElement from "./pageElement";

const Strategy = () => {
  return (
    <>
      <ItemText
        title="Design Detail"
        subTitle="封面設計理念"
        content={`封面以「循環」為核心概念，運用流暢的絲線圖形來象徵紡織業的連續性與可持續發展。同時，設計中採用了2023年的流行時尚色系，使整體視覺效果更具現代感和吸引力，進一步強調了報告內容的前瞻性與創新性。`}
      />
      <FlexImage
        smImage={Cover_sm}
        mdImage={Cover_md}
        lgImage={Cover_lg}
        altName="Cover"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="簡約易懂的圖解設計"
        content={`圖解設計延續封面色系與絲線主視覺，並搭配真實照片，呈現出簡約而易懂的概念圖解。這種設計有助於觀眾更直觀地理解複雜的循環紡織過程，提升閱讀體驗。`}
      />
      <FlexImage
        smImage={Illustration_sm}
        mdImage={Illustration_md}
        lgImage={Illustration_lg}
        altName="Illustration"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="直觀排版提升理解"
        content={`透過簡潔的排版和和諧的色彩應用，讓複雜內容更易於理解，增強資訊的可讀性，並提升整體的閱讀體驗。`}
      />
      <PageElement />
    </>
  );
};

export default Strategy;
