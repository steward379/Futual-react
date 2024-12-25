import VideoPlayer from "Components/videoPlayer";
import VideoPoster1 from "Assets/img/projects/forestSchool/video1 1440.jpg";
import VideoPoster2 from "Assets/img/projects/forestSchool/video2 1440.jpg";
import VideoPoster3 from "Assets/img/projects/forestSchool/video3 1440.jpg";

const Video = () => {
  return (
    <div className="mb-[100px] mt-[120px] w-full sm:mb-[120px] sm:mt-[140px] sm:px-[50px] md:mb-[140px] md:mt-[180px]">
      <p className="text-center font-noto text-[18px] font-normal  leading-[180%] tracking-[0.24em] text-gray_5_black sm:text-[20px] md:text-[22px]">
        森林小學堂系列影片
      </p>
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <div className="max-h-[630px]">
        <VideoPlayer
          poster={VideoPoster1}
          src={
            "https://res.cloudinary.com/ddvo0bnca/video/upload/v1734576894/%E6%A3%AE%E6%9E%97%E5%B0%8F%E5%AD%B8%E5%A0%82_%E6%8B%92%E6%AF%92%E7%AF%87_zrhtry.mp4"
          }
        />
      </div>
      <div className="h-[100px] sm:h-[120px] md:h-[140px]" />
      <div className="max-h-[630px]">
        <VideoPlayer
          poster={VideoPoster2}
          src={
            "https://res.cloudinary.com/ddvo0bnca/video/upload/v1734592344/%E5%9C%8B%E6%B3%B0%E4%BA%BA%E5%A3%BD%E6%A3%AE%E6%9E%97%E5%B0%8F%E5%AD%B8%E5%A0%82_%E6%B8%9B%E5%A1%91%E7%AF%87_nyzlha.mp4"
          }
        />
      </div>
      <div className="h-[100px] sm:h-[120px] md:h-[140px]" />
      <div className="max-h-[630px]">
        <VideoPlayer
          poster={VideoPoster3}
          src={
            "https://res.cloudinary.com/ddvo0bnca/video/upload/v1734592366/%E5%9C%8B%E6%B3%B0%E4%BA%BA%E5%A3%BD%E6%A3%AE%E6%9E%97%E5%B0%8F%E5%AD%B8%E5%A0%82_%E6%A0%A1%E5%9C%92%E5%AE%89%E5%85%A8%E7%AF%87final_e9yikn.mp4"
          }
        />
      </div>
    </div>
  );
};

export default Video;
