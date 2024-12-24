import { useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { DoctorTable } from "./DoctorTable";
import { DoctorDetail } from "./DoctorDetail";

export const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  console.log(selectedDoctor);

  return (
    <div>
      {selectedDoctor === null ? (
        <>
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
          <DoctorTable
            setSelectedDoctor={setSelectedDoctor}
            selectedDoctor={selectedDoctor}
          />
        </>
      ) : (
        <DoctorDetail doctor={selectedDoctor} />
      )}
    </div>
  );
};
