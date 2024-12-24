import { useState } from "react";
import { DashboardHeader } from "../components/UserDashboard/DashboardHeader";
import { Sidebar } from "../components/UserDashboard/Sidebar";
import { Profile } from "../components/UserDashboard/Profil/Profile";
import { Branch } from "../components/UserDashboard/Profil/Branch";
import { Doctors } from "../components/UserDashboard/Profil/Doctors/Doctors";
import { DoctorServices } from "../components/UserDashboard/Profil/Doctors/DoctorServices";
import { Representatives } from "../components/UserDashboard/Profil/Representatives/Representatives";

export const UserDashboard = () => {
  const tabButtonsData = [
    {
      icon: <img alt="profile" src="./dashboard/profile.png" />,
      text: "Profil",
    },
    {
      icon: <img alt="profile" src="./dashboard/info.png" />,
      text: "Şube",
    },
    {
      icon: <img alt="profile" src="./dashboard/info.png" />,
      text: "Doktorlar",
    },
    {
      icon: <img alt="profile" src="./dashboard/info.png" />,
      text: "Hizmetler",
    },
    {
      icon: <img alt="profile" src="./dashboard/info.png" />,
      text: "Temsilciler",
    },
  ];
  const [activeButton, setActiveButton] = useState("Profil");

  const renderTabs = (button) => {
    switch (button) {
      case "Profil":
        return <Profile />;
      case "Şube":
        return <Branch />;
      case "Doktorlar":
        return <Doctors />;
      case "Hizmetler":
        return <DoctorServices />;
      case "Temsilciler":
        return <Representatives />;

      default:
        break;
    }
  };
  return (
    <div className="w-full  flex ">
      <Sidebar />
      <div className="w-full flex flex-col px-10 py-6 ">
        <DashboardHeader />
        <div className="flex items-center gap-8 mt-8">
          {tabButtonsData.map((data, index) => (
            <button
              onClick={() => setActiveButton(data.text)}
              key={index}
              className={`w-[130px]  gap-2 border border-[#5E5873]/30 rounded-md transition duration-200 ${
                activeButton === data.text
                  ? "bg-primary text-white"
                  : "text-[#5E5873]"
              } flex items-center justify-center py-1`}
            >
              {data.icon}
              {data.text}
            </button>
          ))}
        </div>
        <div className="mt-16 ">{renderTabs(activeButton)}</div>
        <div className="h-full flex items-end justify-end ">
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Değişiklikleri Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};
