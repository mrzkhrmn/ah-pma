import { useState } from "react";

const tabButtonsData = [
  {
    text: "Paylaşımlar",
    style:
      "w-[140px] text-[16px] leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
  },
  {
    text: "Hakkımızda",
    style:
      "w-[140px] text-[16px] leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
  },
  {
    text: "Hizmetler",
    style:
      "w-[140px] text-[16px] leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
  },
  {
    text: "Doktorlar",
    style:
      "w-[140px] text-[16px] leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
  },
  {
    text: "İletişim",
    style:
      "w-[140px] text-[16px] leading-[19px] border border-primary py-2.5 px-4 rounded-lg transisition duration-200",
  },
];

export const HomePage = () => {
  const [activeTabButton, setActiveTabButton] = useState("Paylaşımlar");

  console.log(activeTabButton);

  return (
    <div className="w-full ">
      <div className="max-w-[1400px] mx-auto 0">
        <img src="./home/banner.png" className="w-full " />

        {/* Ön Kayıt */}
        <div className="px-10 mt-10">
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
        <div>
          <img src="./home/planning.png" className="my-10" />
        </div>
        {/* Tabs */}
        <div className="flex flex-col items-center py-32">
          <div>
            {/* Tab buttons*/}
            <div className="flex items-center gap-6">
              {tabButtonsData.map(({ text, style }, index) => (
                <button
                  key={index}
                  className={`${style} ${
                    activeTabButton === text && "bg-primary text-white"
                  }`}
                  onClick={() => {
                    activeTabButton !== text && setActiveTabButton(text);
                  }}
                >
                  {text}
                </button>
              ))}
            </div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-black to-transparent mt-8"></div>
          </div>
          {/* Paylaşımlar */}
        </div>
      </div>
    </div>
  );
};
