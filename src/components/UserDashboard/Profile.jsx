import { useRef } from "react";

export const Profile = () => {
  const fileRef = useRef();
  return (
    <>
      <div className="flex items-center  gap-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <h4 className="text-[14px] leading-[15px] font-bold text-[#4D4A48]">
            Kullanıcı Logosu
          </h4>
          <div className=" w-[108px] h-[108px] flex items-center justify-center rounded-md  border border-[#9b9bC3]">
            Logo
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 mt-6">
          <p className="text-[14px] leading-[18px] text-[#B9B9C3]">
            Required image resolution 800x800, image size 10mb.
          </p>
          <a className="text-[18px] leading-[18px] text-primary hover:underline cursor-pointer">
            https://pixinvent.com/images/banner.jpg
          </a>
          <form className="w-full flex gap-12 items-center">
            <div className="flex items-center">
              <p className="text-base px-4 py-[9px] rounded-l-lg text-[12px] leading-[24px] text-[#B9B9C3] border border-[#9b9bC3] h-full w-[220px]">
                Choose File
              </p>
              <button
                className="text-white bg-primary py-2 rounded-r-lg text-lg px-4"
                onClick={() => fileRef.current.click()}
              >
                Browse
              </button>
              <input type="file" hidden ref={fileRef} />
            </div>
            <button
              className="text-white bg-primary py-2 rounded-lg text-lg px-4"
              onClick={() => fileRef.current.click()}
            >
              <img alt="trash" src="./dashboard/trash.png" />
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10">
        {" "}
        <h4 className="text-[14px] leading-[15px] font-bold text-[#4D4A48]">
          Hakkımızda Metni
        </h4>
        <textarea
          style={{ resize: "none" }}
          className="mt-2 w-[800px] placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3] h-[170px]"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
      <div className="mt-10 flex itemce gap-8">
        <div className="flex flex-col items-center gap-4">
          <img alt="roomImage" src="./dashboard/roomImage.png" />
          <button
            className="text-white bg-primary py-2 rounded-lg text-lg px-2"
            onClick={() => fileRef.current.click()}
          >
            <img alt="trash" src="./dashboard/trash.png" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img alt="roomImage" src="./dashboard/roomImage.png" />
          <button
            className="text-white bg-primary py-2 rounded-lg text-lg px-2"
            onClick={() => fileRef.current.click()}
          >
            <img alt="trash" src="./dashboard/trash.png" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img alt="roomImage" src="./dashboard/roomImage.png" />
          <button
            className="text-white bg-primary py-2 rounded-lg text-lg px-2"
            onClick={() => fileRef.current.click()}
          >
            <img alt="trash" src="./dashboard/trash.png" />
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="text-white bg-primary py-2 rounded-lg text-lg px-2 mb-12"
            onClick={() => fileRef.current.click()}
          >
            <img alt="trash" src="./dashboard/add.png" />
          </button>
        </div>
      </div>
    </>
  );
};
