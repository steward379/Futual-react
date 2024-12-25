
import Character_sm from "Assets/img/projects/forestSchool/character_390.svg";
import Character_md from "Assets/img/projects/forestSchool/character_768.svg";
import Character_lg from "Assets/img/projects/forestSchool/character_1440.svg";

import ItemText from "Components/projects/itemText";
import FlexImage from "Components/flexImage";
import Album from "./album";
import VideoSwiper from "./videoSwiper";
import BagElement from "./bagElement";

const Strategy = () => {
  return (
    <>
      <ItemText
        title="Design Detail"
        subTitle="可愛角色設計"
        content={`在國泰的「森林小學堂」中，我們設計了一系列可愛且具教育意義的角色，來傳達反毒、減塑及校園安全等主題。每個角色都具有獨特的象徵意涵，例如小樹老師象徵智慧與關愛，玲玲代表善良與力量，角角則代表智慧與勇敢，笑笑象徵環保與快樂。這些角色不僅吸引孩子們的注意力，也幫助他們在輕鬆的氛圍中學習知識。`}
      />
      <FlexImage
        smImage={Character_sm}
        mdImage={Character_md}
        lgImage={Character_lg}
        altName="Character"
      />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        subTitle="影片分鏡設計"
        content={`採用簡潔明快的分鏡風格。這些分鏡以可愛的角色設計搭配鮮明的情境，讓觀眾能輕鬆跟隨故事情節，理解我們要傳達的概念和知識。`}
      />
      <VideoSwiper />
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <ItemText
        noMarginBottom={true}
        subTitle="永續校園推廣手冊"
        content={`作為「森林小學堂」影片的延伸互補教材，手冊設計目的在深化減塑教育內容，幫助讀者更全面理解如何將影片中的知識付諸實踐。`}
      />
      <Album />
      <ItemText
        subTitle="森林小學堂周邊產品"
        content={`我們設計了一系列與「森林小學堂」相關的周邊產品，如環保袋和筆記本，讓減塑與永續的理念延伸至日常生活中，既具實用性又強化了教育內容的影響力。圖解設計延續封面色系與絲線主視覺，並搭配真實照片，呈現出簡約而易懂的概念圖解。這種設計有助於觀眾更直觀地理解複雜的循環紡織過程，提升閱讀體驗。`}
      />
       <BagElement />
    </>
  );
};

export default Strategy;
