import { useRef } from "react";

export const DoctorDetail = ({ doctor }) => {
  const fileRef = useRef();
  return (
    <div className="pr-16 ">
      <h4 className="text-[14px] leading-[15px] font-bold text-[#4D4A48]">
        Doktor: {doctor.name}
      </h4>
      <div className="mt-4">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="branch">
              Şube
            </label>
            <select
              id="branch"
              name="branch"
              className=" placeholder:text-base text-[#B9B9C3]  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            >
              <option className=" text-base text-[12px] leading-[24px] text-[#B9B9C3]">
                Şube 1
              </option>
            </select>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="title">
              Unvan
            </label>
            <select
              id="title"
              name="title"
              className=" placeholder:text-base text-[#B9B9C3]  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            >
              <option className=" text-base text-[12px] leading-[24px] text-[#B9B9C3]">
                Ass Dr.
              </option>
            </select>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="email">
              Yetkili Kişi E-posta
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="deneme@gmail.com"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="phone">
              Yetkili Kişi Telefon
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="+905422153253"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="branch">
              Mesleğe Başladığı Yıl
            </label>
            <select
              id="branch"
              name="branch"
              className=" placeholder:text-base text-[#B9B9C3]  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            >
              <option className=" text-base text-[12px] leading-[24px] text-[#B9B9C3]">
                Şube 1
              </option>
            </select>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="title">
              Doğum Yeri
            </label>
            <select
              id="title"
              name="title"
              className=" placeholder:text-base text-[#B9B9C3]  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            >
              <option className=" text-base text-[12px] leading-[24px] text-[#B9B9C3]">
                Ass Dr.
              </option>
            </select>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="email">
              Doğum Tarihi
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="deneme@gmail.com"
              className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label className="text-[14px] text-[#4D4A48]" htmlFor="branch">
              Durum
            </label>
            <select
              id="branch"
              name="branch"
              className=" placeholder:text-base text-[#B9B9C3]  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
            >
              <option className=" text-base text-[12px] leading-[24px] text-[#B9B9C3]">
                Active
              </option>
              <option className=" text-base text-[12px] leading-[24px] text-[#B9B9C3]">
                Pending
              </option>
              <option className=" text-base text-[12px] leading-[24px] text-[#B9B9C3]">
                Inactive
              </option>
            </select>
          </div>
        </div>
        <div className="flex items-center mt-6  gap-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-[14px] leading-[15px] font-bold text-[#4D4A48]">
              Doktor Fotoğrafı
            </h4>
            <div className=" w-[108px] h-[108px] flex items-center justify-center rounded-md  border border-[#9b9bC3]">
              <img
                alt="userImg"
                src="./dashboard/person.png"
                className="object-contain object-center "
              />
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
                <img alt="trash" src="./dashboard/trash.png" cla />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
