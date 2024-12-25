import box1_sm from "Assets/img/projects/forestSchool/grid1 390.jpg";
import box2_sm from "Assets/img/projects/forestSchool/grid2 390.jpg";
import box3_sm from "Assets/img/projects/forestSchool/grid3 390.jpg";
import box4_sm from "Assets/img/projects/forestSchool/grid4 390.jpg";
import box5_sm from "Assets/img/projects/forestSchool/grid5 390.jpg";
import box1_md from "Assets/img/projects/forestSchool/grid1 768.jpg";
import box2_md from "Assets/img/projects/forestSchool/grid2 768.jpg";
import box3_md from "Assets/img/projects/forestSchool/grid3 768.jpg";
import box4_md from "Assets/img/projects/forestSchool/grid4 768.jpg";
import box5_md from "Assets/img/projects/forestSchool/grid5 768.jpg";
import box1_lg from "Assets/img/projects/forestSchool/grid1 1440.jpg";
import box2_lg from "Assets/img/projects/forestSchool/grid2 1440.jpg";
import box3_lg from "Assets/img/projects/forestSchool/grid3 1440.jpg";
import box4_lg from "Assets/img/projects/forestSchool/grid4 1440.jpg";
import box5_lg from "Assets/img/projects/forestSchool/grid5 1440.jpg";
import BentoComponent from "Components/projects/bento";

const BoxList = [
  {
    id: 1,
    isFirst: true,
    isJost: false,
    imageSm: box1_sm,
    imageMd: box1_md,
    imageLg: box1_lg,
    textColor: "141414",
    title: "小學堂角色設計",
    content: "生動有趣的角色，吸引學生關注，\n並幫助傳達減塑等教育內容。",
  },
  {
    id: 2,
    isFirst: false,
    isJost: false,
    imageSm: box2_sm,
    imageMd: box2_md,
    imageLg: box2_lg,
    textColor: "141414",
    title: "動畫故事呈現",
    content: "透過動畫生動演示，讓複雜概念變得\n簡單易懂，提升學習效果。",
  },
  {
    id: 3,
    isFirst: false,
    isJost: false,
    imageSm: box3_sm,
    imageMd: box3_md,
    imageLg: box3_lg,
    textColor: "fff",
    title: "多媒材教育內容",
    content: "結合多種影片與手冊媒材，豐富課程\n內容，強化教育傳播效果。",
  },
  {
    id: 4,
    isFirst: false,
    isJost: false,
    imageSm: box4_sm,
    imageMd: box4_md,
    imageLg: box4_lg,
    textColor: "141414",
    title: "周邊延伸製作物",
    content: "設計如袋子和筆記本等周邊產品，\n讓角色延伸至日常生活。",
  },
  {
    id: 5,
    isFirst: false,
    isJost: false,
    imageSm: box5_sm,
    imageMd: box5_md,
    imageLg: box5_lg,
    textColor: "141414",
    title: "領角鴞原型設計",
    content: "以台灣特有種領角鴞為原型，突顯\n本土生態特色，增加認同感。",
  },
];

const Bento = () => {
  return (
    <BentoComponent BoxList={BoxList} />
  );
};

export default Bento;
