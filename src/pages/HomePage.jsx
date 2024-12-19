import { useState } from "react";
import { Shares } from "../components/home/tabs/shares/Shares";
import { About } from "../components/home/tabs/about/About";
import { Services } from "../components/home/tabs/services/Services";
import { Doctors } from "../components/home/tabs/doctors/Doctors";
import { useGetOffer } from "../context/GetOfferProvider";
import { GetOfferModal } from "../components/home/get-offer/GetOfferModal";

export const HomePage = () => {
  const [activeTabButton, setActiveTabButton] = useState("Paylaşımlar");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const { getOffer, setGetOffer } = useGetOffer();

  const tabButtonsData = [
    {
      text: "Paylaşımlar",
      style:
        "w-[140px] text-[16px] leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
      onClick: () => setActiveTabButton("Paylaşımlar"),
    },
    {
      text: "Hakkımızda",
      style:
        "w-[140px] text-[16px] leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
      onClick: () => setActiveTabButton("Hakkımızda"),
    },
    {
      text: "Hizmetler",
      style:
        "w-[140px] text-[16px] leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
      onClick: () => setActiveTabButton("Hizmetler"),
    },
    {
      text: "Doktorlar",
      style:
        "w-[140px] text-[16px] leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
      onClick: () => {
        setActiveTabButton("Doktorlar");
        setSelectedDoctor(null);
      },
    },
  ];

  const renderTabs = (activeTab) => {
    switch (activeTab) {
      case "Paylaşımlar":
        return <Shares />;
      case "Hakkımızda":
        return <About />;
      case "Hizmetler":
        return <Services />;
      case "Doktorlar":
        return (
          <Doctors
            selectedDoctor={selectedDoctor}
            setSelectedDoctor={setSelectedDoctor}
          />
        );
      default:
        break;
    }
  };

  return (
    <>
      <div className=" max-w-[1400px] mx-auto flex flex-col justify-center">
        <img src="./home/banner.png" className="" />
        {/* Ön Kayıt */}
        <div className="px-10 mt-10 flex flex-col">
          <h2 className="text-[20px] leading-[23px] text-primary uppercase">
            AMERİKAN HASTANESİ / ONLİNE HİZMETLER
          </h2>
          <h1 className="text-[40px] leading-[48px] font-[900] text-primary uppercase mt-2">
            Ön Kayıt Talebİ
          </h1>
          <p className="text-[20px] leading-[23px] text-primary mt-10">
            Bu alandaki formu doldurarak ilgilendiğiniz operasyonla ilgili tüm
            işlemlerinizi size gönderilecek hesap bilgileri ile mobil
            uygulamamız üzerinden gerçekleştirebileceksiniz.
          </p>
        </div>
        <img
          src="./home/planning.png"
          className="my-10 object-contain object-center"
        />

        {/* Tabs */}
        <div className="flex flex-col items-center">
          <div>
            {/* Tab buttons*/}
            <div className="flex items-center gap-6 mt-16">
              {tabButtonsData.map(({ text, style, onClick }, index) => (
                <button
                  key={index}
                  className={`${style} ${
                    activeTabButton === text && "bg-primary text-white"
                  }`}
                  onClick={onClick}
                >
                  {text}
                </button>
              ))}
            </div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-black to-transparent mt-8"></div>
          </div>
          {/* Seçilen tab'e göre render et*/}
          {renderTabs(activeTabButton)}
        </div>
      </div>
      <GetOfferModal openModal={getOffer} setOpenModal={setGetOffer} />
    </>
  );
};
