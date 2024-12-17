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
        <div className="flex flex-col items-center">
          <div>
            {/* Tab buttons*/}
            <div className="flex items-center gap-6 mt-16">
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
        </div>

        {/* Paylaşımlar*/}
        <div className="flex items-start justify-between mt-6 px-16">
          {/* Filter*/}
          <div className="flex flex-col gap-2 bg-[#CECECE]/20 p-6 border border-dashed border-[#cecece] rounded-md">
            <p className="text-[16px] leading-[19px]">Filtreleme</p>
            <div className="flex flex-col items-start gap-4 hover:underline text-primary">
              <button className="text-[14px] leading-[17px]">
                &gt; Saç Ekimi
              </button>
              <button className="text-[14px] leading-[17px]">
                &gt; Meme Estetiği
              </button>
              <button className="text-[14px] leading-[17px]">
                &gt; Liposuction
              </button>
              <button className="text-[14px] leading-[17px]">
                &gt; Blefaroplasti
              </button>
              <button className="text-[14px] leading-[17px]">
                &gt; Burun Estetiği
              </button>
              <button className="text-[14px] leading-[17px]">
                &gt; Karın Germe
              </button>
              <button className="text-[14px] leading-[17px]">
                &gt; Yağ Enjeksiyonu
              </button>
              <button className="text-[14px] leading-[17px]">&gt; Botox</button>
              <button className="text-[14px] leading-[17px]">
                &gt; Liposuction
              </button>
            </div>
          </div>
          <div>
            <div className="bg-[url(./home/old-woman.png)] h-[560px] w-[672px] overflow-hidden bg-cover bg-center rounded-2xl"></div>
          </div>
          <button className="">
            <img src="./home/teklif-al.png" />
          </button>
        </div>
      </div>
    </div>
  );
};
