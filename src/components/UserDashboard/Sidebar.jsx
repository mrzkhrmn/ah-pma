export const Sidebar = () => {
  const sidebarData = [
    {
      icon: <img alt="icon" src="./dashboard/messageIcon.png" />,
      text: "Profil",
      subTabs: [],
    },
    {
      icon: <img alt="icon" src="./dashboard/messageIcon.png" />,
      text: "Teklif Talepleri",
      subTabs: [],
    },
    {
      icon: <img alt="icon" src="./dashboard/messageIcon.png" />,
      text: "Operasyonlar",
      subTabs: [],
    },
    {
      icon: <img alt="icon" src="./dashboard/messageIcon.png" />,
      text: "Sorular",
      subTabs: [],
    },
    {
      icon: <img alt="icon" src="./dashboard/messageIcon.png" />,
      text: "Yapılacaklar",
      subTabs: ["Operasyon Öncesi", "Operasyon Sonrası"],
    },
  ];

  return (
    <div className="w-[20%] flex  py-4 justify-start items-center flex-col  h-screen shadow-xl">
      <img
        alt="dsahLogo"
        src="./dashboard/logo.png"
        className="object-contain object-center"
      />
      <div className=" w-full mt-6 pl-6">
        <h4 className="text-[16px] leading-[18px] text-[#B9B9C3]">
          Kullanıcı Paneli
        </h4>
        <div className="mt-6 flex flex-col gap-6">
          {sidebarData.map((data, index) => (
            <>
              <button
                key={index}
                className="flex items-center gap-2 text-[20px]"
              >
                {data.icon}
                <span className=" leading-6 text-[#5E5873]">{data.text}</span>
              </button>
              {data.subTabs.length > 0 && (
                <ul className="pl-2 flex flex-col items-start gap-3">
                  {data.subTabs.map((tab, index) => (
                    <button className="text-[17px] text-[#5E5873]" key={index}>
                      . {tab}
                    </button>
                  ))}
                </ul>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
