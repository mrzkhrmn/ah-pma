import { HiArrowsUpDown } from "react-icons/hi2";

export const DoctorTable = ({ setSelectedDoctor, selectedDoctor }) => {
  const doctorsData = [
    {
      id: 1,
      name: "Hanife Ersoy",
      image: "./dashboard/person.png",
      email: "wiwlirug@talgajup.co.uk",
      branch: "Şube 1",
      status: "Active",
    },
    {
      id: 2,
      name: "Ahmet Yılmaz",
      image: "./dashboard/person.png",
      email: "wiwlirug@talgajup.co.uk",
      branch: "Şube 2",
      status: "Pending",
    },
    {
      id: 3,
      name: "Oğuzhan Genç",
      image: "./dashboard/person.png",
      email: "wiwlirug@talgajup.co.uk",
      branch: "Şube 1",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Mehmet Kahraman",
      image: "./dashboard/person.png",
      email: "wiwlirug@talgajup.co.uk",
      branch: "Şube 1",
      status: "Active",
    },
  ];

  const handleDoctorDetail = (dctr) => {
    if (selectedDoctor === null || selectedDoctor.id !== dctr.id) {
      setSelectedDoctor(dctr);
    }
  };

  return (
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
        {doctorsData.map((doctor, index) => (
          <tr key={index} className="flex justify-between border px-4 py-2">
            <div className="flex items-center gap-1 flex-1">
              <input type="checkbox" />
              <div className="flex items-center">
                <img alt="person" src={doctor.image} className="rounded-full" />
                <div>
                  <p className=" font-semibold text-[#6E6B7B]">{doctor.name}</p>
                  <p className="text-[12px] text-[#B9B9C3]">{doctor.email}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center  flex-1">
              <p>{doctor.branch}</p>
            </div>
            <div className="flex items-center  flex-1 justify-center">
              {doctor.status === "Active" ? (
                <span className="bg-[#28C76F1F] text-[#28C76F] text-[12px] px-1 rounded-lg">
                  Active
                </span>
              ) : doctor.status === "Pending" ? (
                <span className="bg-[#FF9F431F] text-[#FF9F43] text-[12px] px-1 rounded-lg">
                  Pending
                </span>
              ) : (
                <span className="bg-[#6C757D1F] text-[#6C757D] text-[12px] px-1 rounded-lg">
                  Inactive
                </span>
              )}
            </div>
            <div className="flex items-center  flex-1 justify-center">
              <button onClick={() => handleDoctorDetail(doctor)}>
                <img alt="view" src="./dashboard/eye.png" />
              </button>
            </div>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
