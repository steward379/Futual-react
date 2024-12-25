import box1_sm from "Assets/img/projects/textiles/grid1 390.jpg";
import box2_sm from "Assets/img/projects/textiles/grid2 390.jpg";
import box3_sm from "Assets/img/projects/textiles/grid3 390.jpg";
import box4_sm from "Assets/img/projects/textiles/grid4 390.jpg";
import box5_sm from "Assets/img/projects/textiles/grid5 390.jpg";
import box1_md from "Assets/img/projects/textiles/grid1 768.jpg";
import box2_md from "Assets/img/projects/textiles/grid2 768.jpg";
import box3_md from "Assets/img/projects/textiles/grid3 768.jpg";
import box4_md from "Assets/img/projects/textiles/grid4 768.jpg";
import box5_md from "Assets/img/projects/textiles/grid5 768.jpg";
import box1_lg from "Assets/img/projects/textiles/grid1 1440.jpg";
import box2_lg from "Assets/img/projects/textiles/grid2 1440.jpg";
import box3_lg from "Assets/img/projects/textiles/grid3 1440.jpg";
import box4_lg from "Assets/img/projects/textiles/grid4 1440.jpg";
import box5_lg from "Assets/img/projects/textiles/grid5 1440.jpg";
import BentoComponent from "Components/projects/bento";

const BoxList = [
  {
    id: 1,
    isFirst: true,
    isJost: false,
    imageSm: box1_sm,
    imageMd: box1_md,
    imageLg: box1_lg,
    textColor: "fff",
    title: "循環紡織主視覺",
    content: "符合循環經濟概念的視覺主題，展現\n紡織業永續發展的目標。",
  },
  {
    id: 2,
    isFirst: false,
    isJost: false,
    imageSm: box2_sm,
    imageMd: box2_md,
    imageLg: box2_lg,
    textColor: "141414",
    title: "2023 流行時尚色系",
    content: "將2023年流行色系融入設計，提升\n視覺吸引力並突顯時尚趨勢。",
  },
  {
    id: 3,
    isFirst: false,
    isJost: false,
    imageSm: box3_sm,
    imageMd: box3_md,
    imageLg: box3_lg,
    textColor: "141414",
    title: "清晰易懂的排版",
    content: "以簡潔明了的排版呈現內容，讓讀者\n輕鬆理解循環紡織核心概念。",
  },
  {
    id: 4,
    isFirst: false,
    isJost: false,
    imageSm: box4_sm,
    imageMd: box4_md,
    imageLg: box4_lg,
    textColor: "141414",
    title: "簡約清楚的圖表",
    content: "使用圖表和照片，直觀呈現數據與\n資訊，強調紡織業減碳效果。",
  },
  {
    id: 5,
    isFirst: false,
    isJost: false,
    imageSm: box5_sm,
    imageMd: box5_md,
    imageLg: box5_lg,
    textColor: "141414",
    title: "色彩區隔章節設計",
    content: "各章節以不同色彩區隔，強化視覺\n引導，讓內容結構更具條理。",
  },
];

const Bento = () => {
  return (
    <BentoComponent BoxList={BoxList} />
  );
};

export default Bento;
