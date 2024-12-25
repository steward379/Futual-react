import PropTypes from "prop-types";

const BentoComponent = ({ BoxList = [] }) => (
  <div className="mb-[120px] png_sm:mb-[140px] bento_lg:mb-[180px]">
    <div className="mx-auto flex flex-col items-center gap-[20px] px-[22px] png_sm:hidden">
      {BoxList.map((box) => (
        <div
          key={box.id}
          className="relative h-[260px] w-[346px] rounded-[20px] border-[1.5px] border-[#ffffff20] shadow-[0_20px_30px_-3.5px_rgba(20,20,20,0.1)]"
        >
          <img
            src={box.imageSm}
            alt={`box${box.id}_sm`}
            className="absolute top-0 h-full w-full rounded-[20px] object-cover"
            loading="lazy"
          />
          <div
            className={`relative ml-[30px] mt-[10px] ${box.textColor === "fff" ? "text-pure_white" : ""}`}
          >
            {box.isJost && (
              <p className="font-jost text-[28px]  font-normal leading-[160%] tracking-[0.1em]">
                {box.title}
              </p>
            )}
            {!box.isJost && (
              <p className="font-meduim font-noto text-[18px] leading-[200%] tracking-[0.08em]">
                {box.title}
              </p>
            )}
            <p className="font-naormal whitespace-pre-line font-noto text-[14px] leading-[180%] tracking-[0.08em]">
              {box.content}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="hidden flex-wrap gap-[20px] px-[50px] png_sm:flex bento_lg:hidden ">
      {BoxList.map((box) => (
        <div
          key={box.id}
          className={`relative h-[340px] ${box.isFirst ? "w-full" : "basis-[calc(50%-10px)]"} rounded-[20px] border-[1.5px] border-[#ffffff20] shadow-[0_20px_30px_-3.5px_rgba(20,20,20,0.1)]`}
        >
          <img
            src={box.imageMd}
            alt={`box${box.id}_md`}
            className="absolute top-0 h-full w-full rounded-[20px] object-cover"
            loading="lazy"
          />
          <div
            className={`relative ml-[40px] mt-[20px] ${box.textColor === "fff" ? "text-pure_white" : ""}`}
          >
            {box.isJost && (
              <p className="font-jost text-[28px] font-normal leading-[160%] tracking-[0.1em]">
                {box.title}
              </p>
            )}
            {!box.isJost && (
              <p className="font-meduim font-noto text-[18px] leading-[200%] tracking-[0.08em]">
                {box.title}
              </p>
            )}
            <p className="font-naormal whitespace-pre-line font-noto text-[14px] leading-[180%] tracking-[0.08em]">
              {box.content}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="mx-auto hidden max-w-[1120px] flex-wrap gap-[20px] bento_lg:flex ">
      {BoxList.map((box) => (
        <div
          key={box.id}
          className={`relative h-[380px] ${box.isFirst ? "basis-[calc(66.66%-6.66px)]" : "basis-[calc(33.33%-13.33px)]"} rounded-[20px] border-[1.5px] border-[#ffffff20] shadow-[0_20px_30px_-3.5px_rgba(20,20,20,0.1)]`}
        >
          <img
            src={box.imageLg}
            alt={`box${box.id}_lg`}
            className="absolute top-0 h-full w-full rounded-[20px] object-cover"
            loading="lazy"
          />
          <div
            className={`relative ml-[40px] mt-[20px] ${box.textColor === "fff" ? "text-pure_white" : ""}`}
          >
            {box.isJost && (
              <p className="font-jost text-[30px] font-normal leading-[160%] tracking-[0.1em]">
                {box.title}
              </p>
            )}
            {!box.isJost && (
              <p className="font-meduim font-noto text-[20px] leading-[200%] tracking-[0.08em]">
                {box.title}
              </p>
            )}
            <p className="font-naormal whitespace-pre-line font-noto text-[15px] leading-[180%] tracking-[0.08em]">
              {box.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

BentoComponent.propTypes = {
  BoxList: PropTypes.instanceOf(Array),
};

export default BentoComponent;
