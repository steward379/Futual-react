import Album1_sm from "Assets/img/projects/forestSchool/album1 390.jpg";
import Album1_md from "Assets/img/projects/forestSchool/album1 768.jpg";
import Album1_lg from "Assets/img/projects/forestSchool/album1 1440.jpg";
import Album2_sm from "Assets/img/projects/forestSchool/album2 390.jpg";
import Album2_md from "Assets/img/projects/forestSchool/album2 768.jpg";
import Album2_lg from "Assets/img/projects/forestSchool/album2 1440.jpg";
import Album3_sm from "Assets/img/projects/forestSchool/album3 390.jpg";
import Album3_md from "Assets/img/projects/forestSchool/album3 768.jpg";
import Album3_lg from "Assets/img/projects/forestSchool/album3 1440.jpg";
import Album4_sm from "Assets/img/projects/forestSchool/album4 390.jpg";
import Album4_md from "Assets/img/projects/forestSchool/album4 768.jpg";
import Album4_lg from "Assets/img/projects/forestSchool/album4 1440.jpg";
import Album5_sm from "Assets/img/projects/forestSchool/album5 390.jpg";
import Album5_md from "Assets/img/projects/forestSchool/album5 768.jpg";
import Album5_lg from "Assets/img/projects/forestSchool/album5 1440.jpg";
import Album6_sm from "Assets/img/projects/forestSchool/album6 390.jpg";
import Album6_md from "Assets/img/projects/forestSchool/album6 768.jpg";
import Album6_lg from "Assets/img/projects/forestSchool/album6 1440.jpg";
import Album7_sm from "Assets/img/projects/forestSchool/album7 390.jpg";
import Album7_md from "Assets/img/projects/forestSchool/album7 768.jpg";
import Album7_lg from "Assets/img/projects/forestSchool/album7 1440.jpg";
import Album8_sm from "Assets/img/projects/forestSchool/album8 390.jpg";
import Album8_md from "Assets/img/projects/forestSchool/album8 768.jpg";
import Album8_lg from "Assets/img/projects/forestSchool/album8 1440.jpg";
import Album9_sm from "Assets/img/projects/forestSchool/album9 390.jpg";
import Album9_md from "Assets/img/projects/forestSchool/album9 768.jpg";
import Album9_lg from "Assets/img/projects/forestSchool/album9 1440.jpg";


import AlbumComponent from "Components/projects/Album";

const imageList = [
  {
    id: 1,
    smSrc: Album1_sm,
    mdSrc: Album1_md,
    lgSrc: Album1_lg,
    alt: "Album 1",
  },
  {
    id: 2,
    smSrc: Album2_sm,
    mdSrc: Album2_md,
    lgSrc: Album2_lg,
    alt: "Album 2",
  },
  {
    id: 3,
    smSrc: Album3_sm,
    mdSrc: Album3_md,
    lgSrc: Album3_lg,
    alt: "Album 3",
  },
  {
    id: 4,
    smSrc: Album4_sm,
    mdSrc: Album4_md,
    lgSrc: Album4_lg,
    alt: "Album 4",
  },
  {
    id: 5,
    smSrc: Album5_sm,
    mdSrc: Album5_md,
    lgSrc: Album5_lg,
    alt: "Album 5",
  },
  {
    id: 6,
    smSrc: Album6_sm,
    mdSrc: Album6_md,
    lgSrc: Album6_lg,
    alt: "Album 6",
  },
  {
    id: 7,
    smSrc: Album7_sm,
    mdSrc: Album7_md,
    lgSrc: Album7_lg,
    alt: "Album 7",
  },
  {
    id: 8,
    smSrc: Album8_sm,
    mdSrc: Album8_md,
    lgSrc: Album8_lg,
    alt: "Album 8",
  },
  {
    id: 9,
    smSrc: Album9_sm,
    mdSrc: Album9_md,
    lgSrc: Album9_lg,
    alt: "Album 9",
  },
];

const Album = () => {
  return (
    <div className="px-[12px] md:px-[14px]">
      <AlbumComponent imageList={imageList} />
    </div>
  )
}

export default Album
