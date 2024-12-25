import Book_image from "Assets/img/projects/textiles/book 1440.jpg";
import Book_image_sm from "Assets/img/projects/textiles/book 390.jpg";
import CustomButton from "Components/buttonText";

const Book = () => {
  return (
    <div className="mx-auto flex flex-col items-center px-[22px] sm:px-[71px] md:max-w-[1044px]">
      <p className="text-center font-noto text-[18px] font-normal  leading-[180%] tracking-[0.24em] text-gray_5_black sm:text-[20px] md:text-[22px]">
        循環紡織報告書
      </p>
      <div className="h-[40px] sm:h-[50px] md:h-[60px]" />
      <img src={Book_image} alt="Book" className="hidden sm:block max-w-[367px]" />
      <img src={Book_image_sm} alt="Book" className="block sm:hidden" />
      <a
        href="https://circular-taiwan.org/learn/circulartextile_reshapingtheindustrysfuture/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CustomButton
          className="mt-[26px] rounded-[84px] bg-gray_4 px-[31px] pb-[14px] pt-[13px] shadow-[0px_4px_9px_0px_rgba(20,20,20,0.18)] sm:mt-[30px] sm:px-[33px] md:mt-[40px] md:px-[37.5px]"
          textClassName="font-jost text-[14px] font-[600] italic leading-[160%] tracking-[0.08em] text-pure_white md:text-[15px]"
        >
          Download
        </CustomButton>
        <div className="h-[100px] sm:h-[120px] md:h-[140px]" />
      </a>
    </div>
  );
};

export default Book;
