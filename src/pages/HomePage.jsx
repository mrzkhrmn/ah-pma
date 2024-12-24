import { useEffect, useState } from "react";
import { Shares } from "../components/home/tabs/shares/Shares";
import { About } from "../components/home/tabs/about/About";
import { Services } from "../components/home/tabs/services/Services";
import { Doctors } from "../components/home/tabs/doctors/Doctors";
import { useGetOffer } from "../context/GetOfferProvider";
import { GetOfferModal } from "../components/home/get-offer/GetOfferModal";
import { GetOfferButton } from "../components/GetOfferButton";

export const HomePage = () => {
  const [activeTabButton, setActiveTabButton] = useState("Paylaşımlar");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const { getOffer, setGetOffer } = useGetOffer();

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Ekranın yarısına gelindiğinde butonu görünür yap
    const scrollPosition = window.scrollY;
    const screenHeight = window.innerHeight;
    if (scrollPosition > screenHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tabButtonsData = [
    {
      text: "Paylaşımlar",
      style:
        "lg:w-[140px] md:w-[90px] w-[70px] sm:text-[16px] text-[12px] flex items-center justify-center sm:leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
      onClick: () => setActiveTabButton("Paylaşımlar"),
    },
    {
      text: "Hakkımızda",
      style:
        "lg:w-[140px] md:w-[90px] w-[70px]  sm:text-[16px]  text-[12px] flex items-center justify-center sm:leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
      onClick: () => setActiveTabButton("Hakkımızda"),
    },
    {
      text: "Hizmetler",
      style:
        "lg:w-[140px] md:w-[90px] w-[70px]  sm:text-[16px]  text-[12px] flex items-center justify-center sm:leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
      onClick: () => setActiveTabButton("Hizmetler"),
    },
    {
      text: "Doktorlar",
      style:
        "lg:w-[140px] md:w-[90px] w-[70px]  sm:text-[16px]  text-[12px] flex items-center justify-center sm:leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
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
    <div className="relative">
      <div className=" max-w-[1400px] mx-auto flex flex-col justify-center pb-32">
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
        <div className="flex flex-col items-center ">
          <div>
            {/* Tab buttons*/}
            <div className="flex items-center lg:gap-6 md:gap-6 gap-2 ">
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
          <div className="relative flex xl:flex-row flex-col justify-center w-full lg:gap-18 gap-10 xl:items-start items-center mt-6 lg:px-0 px-6">
            {/* Filter*/}
            <div className="flex flex-col gap-2 bg-[#CECECE]/20 p-6 border border-dashed border-[#cecece] rounded-md">
              <p className="text-[16px] leading-[19px]">Filtreleme</p>
              <div className="flex xl:flex-col flex-row items-start gap-4 whitespace-nowrap lg:flex-nowrap flex-wrap text-primary">
                <button className="text-[14px] leading-[17px] hover:underline">
                  &gt; Saç Ekimi
                </button>
                <button className="text-[14px] leading-[17px] hover:underline">
                  &gt; Meme Estetiği
                </button>
                <button className="text-[14px] leading-[17px] hover:underline">
                  &gt; Liposuction
                </button>
                <button className="text-[14px] leading-[17px] hover:underline">
                  &gt; Blefaroplasti
                </button>
                <button className="text-[14px] leading-[17px] hover:underline">
                  &gt; Burun Estetiği
                </button>
                <button className="text-[14px] leading-[17px] hover:underline">
                  &gt; Karın Germe
                </button>
                <button className="text-[14px] leading-[17px] hover:underline">
                  &gt; Yağ Enjeksiyonu
                </button>
                <button className="text-[14px] leading-[17px] hover:underline">
                  &gt; Botox
                </button>
                <button className="text-[14px] leading-[17px] hover:underline">
                  &gt; Liposuction
                </button>
              </div>
            </div>
            {/* Seçilen tab'e göre render et*/}
            {renderTabs(activeTabButton)}
            <div className="xl:block hidden">
              <GetOfferButton />
            </div>
          </div>
        </div>
      </div>
      <GetOfferModal openModal={getOffer} setOpenModal={setGetOffer} />
      <div
        className={`fixed xl:hidden ${
          isVisible ? "block" : "hidden"
        } sm:bottom-0 bottom-24 sm:right-4  right-[5.5rem] `}
      >
        <GetOfferButton />
      </div>
    </div>
  );
};
