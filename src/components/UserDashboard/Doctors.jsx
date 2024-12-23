import { HiArrowsUpDown } from "react-icons/hi2";

export const Doctors = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 ml-8">
          <p className="text-[#6E6B7B]">Göster</p>
          <select className=" placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]">
            <option value={10}>10</option>
          </select>
          <button className="bg-primary text-white  px-6 py-2 rounded-lg">
            Doktor Ekle
          </button>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#6E6B7B]">Arama</p>
          <input
            placeholder="Ara"
            className=" py-2 px-4 placeholder:text-base  rounded-lg placeholder:text-[12px] placeholder:leading-[24px] placeholder:text-[#B9B9C3] border border-[#9b9bC3]"
          />

          <select className="bg-white text-primary   px-6 py-2 rounded-lg">
            <option>Export</option>
          </select>
        </div>
      </div>
      <table className=" w-full mt-4 ">
        <thead className="border  flex items-center bg-[#F3F2F7] py-2 px-4">
          <td className="flex justify-between flex-1">
            <div className="flex items-center gap-2 text-[#5E5873] text-[14px]">
              <input type="checkbox" className="bg-transparent" />
              <p>İSİM</p>
            </div>
            <button>
              <HiArrowsUpDown />
            </button>
          </td>
          <td className="flex justify-between items-center flex-1">
            <div className="w-full flex items-center justify-center gap-2 text-[#5E5873] text-[14px]">
              <p>ŞUBE ADI</p>
            </div>
            <button>
              <HiArrowsUpDown />
            </button>
          </td>
          <td className="flex justify-between flex-1">
            <div className="flex items-center justify-center gap-2 w-full text-[#5E5873] text-[14px]">
              <p>DURUM</p>
            </div>
            <button>
              <HiArrowsUpDown />
            </button>
          </td>
          <td className="flex justify-between flex-1">
            <div className="flex items-center justify-center gap-2 w-full text-[#5E5873] text-[14px]">
              <p>DETAY</p>
            </div>
          </td>
        </thead>
        <tbody>
          <tr className="flex justify-between border px-4 py-2">
            <div className="flex items-center gap-1 flex-1">
              <input type="checkbox" />
              <div className="flex items-center">
                <img
                  alt="person"
                  src="./dashboard/person.png"
                  className="rounded-full"
                />
                <div>
                  <p className=" font-semibold text-[#6E6B7B]">Hanife Ersoy</p>
                  <p className="text-[12px] text-[#B9B9C3]">
                    wiwlirug@talgajup.co.uk
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center  flex-1">
              <p>Şube 1</p>
            </div>
            <div className="flex items-center  flex-1 justify-center">
              <span className="bg-[#28C76F1F] text-[#28C76F] text-[12px] px-1 rounded-lg">
                Active
              </span>
            </div>
            <div className="flex items-center  flex-1 justify-center">
              <button>
                <img alt="view" src="./dashboard/eye.png" />
              </button>
            </div>
          </tr>
          <tr className="flex justify-between border px-4 py-2">
            <div className="flex items-center flex-1 gap-1">
              <input type="checkbox" />
              <div className="flex items-center">
                <img
                  alt="person"
                  src="./dashboard/person.png"
                  className="rounded-full"
                />
                <div>
                  <p className=" font-semibold text-[#6E6B7B]">Hanife Ersoy</p>
                  <p className="text-[12px] text-[#B9B9C3]">
                    wiwlirug@talgajup.co.uk
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center  flex-1">
              <p>Şube 1</p>
            </div>
            <div className="flex items-center  flex-1 justify-center">
              <span className="bg-[#28C76F1F] text-[#28C76F] text-[12px] px-1 rounded-lg">
                Active
              </span>
            </div>
            <div className="flex items-center  flex-1 justify-center">
              <button>
                <img alt="view" src="./dashboard/eye.png" />
              </button>
            </div>
          </tr>
          <tr className="flex justify-between border px-4 py-2">
            <div className="flex items-center flex-1 gap-1">
              <input type="checkbox" />
              <div className="flex items-center">
                <img
                  alt="person"
                  src="./dashboard/person.png"
                  className="rounded-full"
                />
                <div>
                  <p className=" font-semibold text-[#6E6B7B]">Hanife Ersoy</p>
                  <p className="text-[12px] text-[#B9B9C3]">
                    wiwlirug@talgajup.co.uk
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center  flex-1">
              <p>Şube 1</p>
            </div>
            <div className="flex items-center  flex-1 justify-center">
              <span className="bg-[#28C76F1F] text-[#28C76F] text-[12px] px-1 rounded-lg">
                Active
              </span>
            </div>
            <div className="flex items-center  flex-1 justify-center">
              <button>
                <img alt="view" src="./dashboard/eye.png" />
              </button>
            </div>
          </tr>
          <tr className="flex justify-between border px-4 py-2">
            <div className="flex items-center flex-1 gap-1">
              <input type="checkbox" />
              <div className="flex items-center">
                <img
                  alt="person"
                  src="./dashboard/person.png"
                  className="rounded-full"
                />
                <div>
                  <p className=" font-semibold text-[#6E6B7B]">Hanife Ersoy</p>
                  <p className="text-[12px] text-[#B9B9C3]">
                    wiwlirug@talgajup.co.uk
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center  flex-1">
              <p>Şube 1</p>
            </div>
            <div className="flex items-center  flex-1 justify-center">
              <span className="bg-[#28C76F1F] text-[#28C76F] text-[12px] px-1 rounded-lg">
                Active
              </span>
            </div>
            <div className="flex items-center  flex-1 justify-center">
              <button>
                <img alt="view" src="./dashboard/eye.png" />
              </button>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
