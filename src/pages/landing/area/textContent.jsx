import ENVIRONMENT_ICON from "Assets/svg/area_environment_icon.svg";

const TextContent = () => {
  return (
    <div>
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        className="flex h-[100px] nav_md:h-[120px] xl:h-[140px]"
      >
        <img
          className="h-[90px] w-[90px] nav_md:h-[100px] nav_md:w-[100px] xl:h-[120px] xl:w-[120px]"
          src={ENVIRONMENT_ICON}
          alt="Environment Icon"
        />
        <p className="flex items-center font-noto text-[34px] leading-[160%] tracking-[0.24em] text-gray_5_black nav_md:text-[38px] xl:text-[40px]">
          環境保護
        </p>
      </div>
      <p
        data-aos="fade-in"
        data-aos-delay="500"
        className="mt-[-10px] max-w-[653px] pr-[23px] text-left font-noto text-[15px] font-normal leading-[200%] tracking-[1.2px] text-gray_5_black nav_md:pr-0 lg:text-[16px]"
      >
        在氣候變遷和生態危機下，解決環境問題和企業品牌的營運同樣重要。
        <span className="mr-2">Futual</span>
        相信透過創新設計，能為環境和品牌找到永續發展的平衡，創造互利共生之道。
      </p>
    </div>
  );
};

export default TextContent;
