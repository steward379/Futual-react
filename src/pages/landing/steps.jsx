import { useState, useEffect } from "react";
import { throttle } from "lodash";
import styled from "styled-components";
import Strategize from "Assets/img/Strategize.png";
import Communicate from "Assets/img/communicate.jpg";
import Innovate from "Assets/img/innovate.jpg";
import Icon_step_1 from "Assets/img/icon_step_1.png";
import Icon_step_2 from "Assets/img/icon_step_2.png";
import Icon_step_3 from "Assets/img/icon_step_3.png";
import Point_bacground from "Assets/svg/point_background.svg";
import Communicate_Icon from "Assets/svg/communicate icon.svg";
import Innovate_Icon from "Assets/svg/innovate icon.svg";
import Strategize_Icon from "Assets/svg/strategize icon.svg";
import StepsContent from "Components/stepsContent";
import "animate.css";


const textContent = [
  {
    title: "Strategize",
    title_zh: "策略",
    step_icon: Icon_step_1,
    subtitle:
      "針對議題現況進行深入分析，全面理解利害關係人的潛在需求，並整合多領域專家觀點，深入了解議題全貌、制定明確的未來目標，提出全面的永續發展路徑。",
    description: "永續策略顧問·主題系統工作坊·永續路徑規劃",
    icon: Strategize_Icon,
  },
  {
    title: "Innovate",
    title_zh: "創新",
    step_icon: Icon_step_2,
    subtitle:
      "串聯設計師、使用者及永續專家，延伸永續發展策略，開創以人為本，顧及治理、社會和環境的創新永續解方。將挑戰化為機會，創造正向且持續的改變。",
    description: "數位內容設計·教育體驗設計·策展活動設計",
    icon: Innovate_Icon,
  },
  {
    title: "Communicate",
    title_zh: "溝通",
    step_icon: Icon_step_3,
    subtitle:
      "創新解方需要被有效的擴散。打造有故事的永續品牌，針對不同目標對象，設計最適合且好懂的溝通內容，讓創新想法得以擴散，延伸更多永續影響力。",
    description: "品牌識別設計·解釋影片·永續報告",
    icon: Communicate_Icon,
  },
];

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background: url(${Point_bacground}) lightgray 50% / cover no-repeat;
  background-position: center;
`;

const Indicator = styled.div`
  position: absolute;
  left: 0;
  z-index: 20;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #9c9c9c; //bg-gray_3
  transition: top 0.3s ease;

  @media (min-width: 480px) {
    height: 10px;
    width: 10px;
  }

  @media (min-width: 769px) {
    height: 12px;
    width: 12px;
  }

  top: ${(props) => {
    switch (props.currentstep) {
      case 0:
        return "calc(50% - 58px)";
      case 1:
        return "calc(50% - 4px)";
      case 2:
        return "calc(50% + 52px)";
      default:
        return "";
    }
  }};

  @media (min-width: 480px) {
    top: ${(props) => {
      switch (props.currentstep) {
        case 0:
          return "calc(50% - 115px)";
        case 1:
          return "calc(50% - 5px)";
        case 2:
          return "calc(50% + 107px)";
        default:
          return "";
      }
    }};
  }

  @media (min-width: 769px) {
    top: ${(props) => {
      switch (props.currentstep) {
        case 0:
          return "calc(50% - 118px)";
        case 1:
          return "calc(50% - 6px)";
        case 2:
          return "calc(50% + 106px)";
        default:
          return "";
      }
    }};
  }
`;

const Steps = () => {
  const [currentstep, setCurrentStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrollY(currentScrollY);

      const fifthBlockStart = 3 * windowHeight;
      const fifthBlockEnd = 6 * windowHeight;

      if (
        currentScrollY >= fifthBlockStart &&
        currentScrollY <= fifthBlockEnd
      ) {
        const scrollPercentage =
          (currentScrollY - fifthBlockStart) /
          (fifthBlockEnd - fifthBlockStart);
        setIsSticky(true);
        if (scrollPercentage >= 1 / 2) {
          setCurrentStep(2);
        } else if (scrollPercentage >= 1 / 4 && scrollPercentage < 1 / 2) {
          setCurrentStep(1);
        } else {
          setCurrentStep(0);
        }
      } else if (currentScrollY > fifthBlockEnd) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    }, 300); // 每300毫秒最多執行一次

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // 取消任何待處理的節流調用
    };
  }, [scrollY, currentstep]);

  return (
    <div className={`${isSticky ? "sticky top-0" : "relative"}`}>
      <Background />
      <div className="flex h-[100vh] justify-center pt-[calc(50vh-350px)] sm:pt-[calc(50vh-400px)] steps_lg:items-center steps_lg:pt-0">
        <div className="flex flex-col items-start px-[20px] sm:px-[60px] steps_lg:flex-row steps_lg:items-center steps_lg:gap-x-[40px]">
          {currentstep === 0 && (
            <img
              src={Strategize}
              alt="Strategize"
              className="animate__animated animate__fadeIn z-10 mx-auto mb-[20px] w-[363px] sm:mb-0 sm:w-[495px] sm:px-0 steps_lg:order-2 steps_lg:w-[495px] xl:w-[660px]"
            />
          )}
          {currentstep === 1 && (
            <img
              src={Innovate}
              alt="Innovate"
              className="animate__animated animate__fadeIn z-10 mx-auto mb-[20px] w-[363px] sm:mb-0 sm:w-[495px] sm:px-0 steps_lg:order-2 steps_lg:w-[495px] xl:w-[660px]"
            />
          )}
          {currentstep === 2 && (
            <img
              src={Communicate}
              alt="Communicate"
              className="animate__animated animate__fadeIn z-10 mx-auto mb-[20px] w-[363px] sm:mb-0 sm:w-[495px] sm:px-0 steps_lg:order-2 steps_lg:w-[495px] xl:w-[660px]"
            />
          )}
          <div className="-mt-[20px] sm:mt-[0px] items-left relative flex w-full text-left sm:pl-[20px] md:mr-[35px] md:w-auto lg:max-w-[513px] lg:pl-0">
            <div className="absolute -top-[40px] right-[22px] flex flex-col items-center justify-center gap-y-[46.5px] sm:relative sm:right-0 sm:top-0 sm:gap-y-[100px]">
              <div className="top-50% lefr-[2px] absolute z-0 h-[117px] w-[2px] bg-gray_1 sm:left-[4px] sm:h-[230px] md:left-[5px] md:h-[236px] md:w-[2.5px]" />
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="z-10 h-2 w-2 rounded-full bg-gray_1 sm:h-[10px] sm:w-[10px] md:h-[12px] md:w-[12px]"
                ></div>
              ))}
              <Indicator currentstep={currentstep} />
            </div>
            {currentstep === 0 && <StepsContent {...textContent[0]} />}
            {currentstep === 1 && <StepsContent {...textContent[1]} />}
            {currentstep === 2 && <StepsContent {...textContent[2]} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
