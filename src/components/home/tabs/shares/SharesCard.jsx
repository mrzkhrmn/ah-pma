export const SharesCard = ({ title, content }) => {
  return (
    <div
      className={`bg-[url(./home/old-woman.png)]  h-[560px] lg:w-[670px] md:w-[550px] w-[350px] overflow-hidden bg-cover bg-center rounded-xl shadow-[rgba(0,0,10,0.3)_1px_6px_12px_1px] border border-primary/20`}
    >
      <div className="h-full flex items-end">
        <div className="bg-white  flex flex-col justify-center lg:gap-7 gap-3 pt-4 pb-8">
          <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-0 gap-4 justify-between px-8">
            <h1 className="text-[20px] leading-[24px] ">{title}</h1>
            <div className="flex items-center gap-2">
              <button>
                <img src="./home/save.png" alt="saveImage" />
              </button>
              <button>
                <img src="./home/share.png" alt="saveImage" />
              </button>
            </div>
          </div>
          <p className="text-[16px] leading-[19px] pl-8 ">{content}</p>
        </div>
      </div>
    </div>
  );
};
