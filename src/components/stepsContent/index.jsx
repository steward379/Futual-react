import PropTypes from "prop-types";
import TextAnimate from "Components/textAnimate";
import "animate.css";

const StepsContent = ({
  step_icon,
  title_zh,
  title,
  subtitle,
  // description,
  icon,
}) => (
  <div className="relative flex max-w-[466px] flex-col justify-between sm:pl-[60px] md:max-w-[501px] lg:pl-[70px]">
    <div className="mb-[68px] sm:mb-[82px] md:mb-[92px]">
      <div className="animate__animated animate__fadeIn flex items-center gap-[8px]">
        <img
          src={step_icon}
          alt="step_icon"
          className="w-[22px] sm:w-[28px] md:w-[30px]"
        />
        {/* <span className="font-sarabun text-[20px] italic leading-[160%] tracking-[0.08em] text-gradient sm:text-[22px] md:text-[24px]">
                  Step{currentstep + 1}
                </span> */}
        <span className="font-noto text-[18px] font-normal leading-[180%] tracking-[0.34em] sm:text-[20px] md:text-[22px]">
          {title_zh}
        </span>
      </div>
      <h2>
        <TextAnimate isTitle customClassName="animate__animated animate__fadeIn absolute top-[25px] font-jost text-[38px] font-light leading-[160%] tracking-[0.08em] sm:top-[35px] sm:text-[46px] md:top-[41px] md:text-[50px]">
          {title}
        </TextAnimate>
      </h2>
    </div>
    <div>
      <p className="animate__animated animate__fadeIn mb-[26px] text-left font-noto text-[15px] font-normal leading-[200%] tracking-[0.08em] md:mb-[40px] md:text-[16px] ">
        {subtitle}
      </p>
      {/* <p className="text-left font-noto text-[15px] font-normal leading-[180%] tracking-[0.08em] text-blue_2 md:text-[16px]">
                {description}
              </p> */}
      <img
        src={icon}
        alt="icon"
        className="animate__animated animate__fadeIn"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  </div>
);

StepsContent.propTypes = {
  step_icon: PropTypes.string,
  title_zh: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};

export default StepsContent;
