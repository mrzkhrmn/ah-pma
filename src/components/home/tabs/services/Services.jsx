import { useRef, useState } from "react";
import { ServicesCard } from "./ServicesCard";
import { useMouseDrag } from "../../../../hooks/useMouseDrag";

export const Services = () => {
  const servicesData = [
    {
      name: "Saç Ekimi",
      image: "./home/sac-ekimi.png",
    },
    {
      name: "Burun Estetiği",
      image: "./home/sac-ekimi.png",
    },
    {
      name: "Meme Estetiği",
      image: "./home/sac-ekimi.png",
    },
    {
      name: "Bölgesel İncelme",
      image: "./home/sac-ekimi.png",
    },
    {
      name: "Kaş Estetiği",
      image: "./home/sac-ekimi.png",
    },
  ];

  const [selectedService, setSelectedService] = useState(servicesData[0]);

  const handleSelectService = (service) => {
    if (selectedService.name === service.name) {
      return console.log("Service already selected");
    }
    setSelectedService(service);
  };
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    ourRef,
  } = useMouseDrag();

  return (
    <div className="mt-6 lg:max-w-[800px] sm:max-w-[450px] max-w-[300px] relative">
      <div
        className="w-full flex items-center  overflow-x-auto flex-nowrap gap-6 scroll "
        ref={ourRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            service={service}
            selectedService={selectedService}
            onSelectService={() => handleSelectService(service)}
          />
        ))}
      </div>
      {selectedService.name === servicesData[0].name ? (
        <div>
          <div className="flex lg:flex-row flex-col mt-10 items-center">
            <img
              src="./home/hair-tb.png"
              alt="hospitalImage"
              className="lg:w-[325px] lg:h-[247px] "
            />
            <div className="flex flex-col justify-between pt-4 lg:px-6 px-0 lg:gap-0 gap-4">
              <p className="font-semibold text-[20px] leading-[24px]">
                Amerikan Hastanesi bir asrı geride bırakırken, tecrübelerini en
                güncel teknolojik ve bilimsel yaklaşımlarla birleştirerek,
                sağlık alanındaki beklentilere yanıt vermeye devam ediyor.
              </p>
              <p className="text-[14px] leading-[17px]">
                Vehbi Koç Vakfı çatısı altında yer alan Amerikan Hastanesi, 100
                yıllık bilgi birikimi ve tecrübesiyle en güncel teknolojileri
                bir araya getirerek, kalite odaklı sağlık hizmetleri sunuyor.
                Hastalarımızla şeffaf iletişim kuran, güvenli ve kaliteli hasta
                bakım ve tedavisi sağlayan, sistemlerini sorgulayan ve
                geliştiren hastanemiz, sağlık sektöründeki lider pozisyonunu
                uluslararası kalite sertifikalarıyla destekliyor.
              </p>
            </div>
          </div>
          <div className="text-[14px] leading-[17px] mt-6 pr-[47px]">
            <p>
              Bu doğrultuda hastalarımıza uluslararası standartlarda ve kalitede
              tıbbi bakım sunabilmek amacıyla “Sürekli Kalite Geliştirme
              Programları” uyguluyoruz. Hastanemizin Türkiye’de Joint Commission
              International (JCI), ISO 9001: Kalite Belgesi, ISO 14001: Çevre
              Yönetim Sistemi ve ISO 27001: Bilgi Güvenliği Yönetim Sistemi
              belgelerinin dördüne birden sahip olan ilk özel hastane olmasının
              gururunu ve sorumluluğunu taşıyoruz.
            </p>
            <p>
              Amerikan Hastanesi, 2002 yılında aldığı JCI Akreditasyon Belgesi
              ile “akredite edilmiş hastane” ünvanını koruyor ve yenilemek üzere
              belirli aralıklarla denetimden geçiyor.
            </p>
          </div>
          <p className="text-[17px] leading-[19px]  mt-6">
            Hastanemiz, “European Association of Echocardiography” kardiyoloji
            akreditasyonu ve Kuzey Amerika standartlarındaki klinik akış ve
            algoritmalarıyla 21. yüzyılın getirdiği sağlık alanındaki
            beklentilere yanıt vermeye devam ediyor.
          </p>
        </div>
      ) : selectedService.name === servicesData[1].name ? (
        <div>
          <div className="flex lg:flex-row flex-col mt-10 items-center">
            <img
              src="./home/hair-tb.png"
              alt="hospitalImage"
              className="lg:w-[325px] lg:h-[247px] "
            />
            <div className="flex flex-col justify-between pt-4 lg:px-6 px-0 lg:gap-0 gap-4">
              <p className="font-semibold text-[20px] leading-[24px]">
                Rinoplasti, burnun yüz ile uyum oranını ve/veya nefes alma
                fonksiyonunu iyileştirmek amaçlı burnun şekli ve yapısının
                değiştirildiği cerrahi prosedürdür. Rinoplasti sadece kozmetik
                amaçla yapılan bir işlem değildir.
              </p>
              <p className="text-[14px] leading-[17px]">
                Ameliyat aynı zamanda burun fonksiyonunu korumayı veya hastanın
                hava akışı azalmışsa iyileştirme amaçlıda yapılmaktadır. Bu,
                işlevsel sorunları düzeltmek için iç burun yapısı değiştirilir.
                Burun estetiği herkese sağlık durumu da uygunsa uygulanabilir.
                Burnun kemerli olması, uzun olması, burun ucunun düşük olması,
                burun deliklerinin büyüklüğü veya asimetri gibi şikayetlerden
                dolayı burun estetiği yapılabilir.
              </p>
            </div>
          </div>
          <div className="text-[14px] leading-[17px] mt-6 pr-[47px]">
            <p>
              Tıbbi adı rinoplasti olan burun estetiği, burnun nefes alma gibi
              fonksiyonel durumunu yerine getirmesi ya da daha iyi bir görünüm
              kazanması için burnun boyutu ve şeklinin değiştirildiği cerrahi
              bir işlemdir. Rinoplasti ideal nefes alma fonksiyonuna sahip ve
              yüzün tamamına uyumlu bir burnun elde edilmesi için
              gerçekleştirilir. Estetik nedenlerle veya yapısal bir sorunu
              düzeltmek için uygulanan rinoplasti yani burun estetiği estetik
              ameliyatlar arasında en sık tercih edilen operasyon türüdür.
            </p>
          </div>
          <p className="text-[17px] leading-[19px]  mt-6">
            Hastanemiz, “European Association of Echocardiography” kardiyoloji
            akreditasyonu ve Kuzey Amerika standartlarındaki klinik akış ve
            algoritmalarıyla 21. yüzyılın getirdiği sağlık alanındaki
            beklentilere yanıt vermeye devam ediyor.
          </p>
        </div>
      ) : (
        <>
          <div className="flex mt-10">
            <img src="./home/hair-tb.png" alt="hospitalImage" />
            <div className="flex flex-col justify-between pt-4 px-6">
              <p className="font-semibold text-[20px] leading-[24px]">
                Rinoplasti, burnun yüz ile uyum oranını ve/veya nefes alma
                fonksiyonunu iyileştirmek amaçlı burnun şekli ve yapısının
                değiştirildiği cerrahi prosedürdür. Rinoplasti sadece kozmetik
                amaçla yapılan bir işlem değildir.
              </p>
              <p className="text-[14px] leading-[17px]">
                Ameliyat aynı zamanda burun fonksiyonunu korumayı veya hastanın
                hava akışı azalmışsa iyileştirme amaçlıda yapılmaktadır. Bu,
                işlevsel sorunları düzeltmek için iç burun yapısı değiştirilir.
                Burun estetiği herkese sağlık durumu da uygunsa uygulanabilir.
                Burnun kemerli olması, uzun olması, burun ucunun düşük olması,
                burun deliklerinin büyüklüğü veya asimetri gibi şikayetlerden
                dolayı burun estetiği yapılabilir.
              </p>
            </div>
          </div>
          <div className="text-[14px] leading-[17px] mt-6 pr-[47px]">
            <p>
              Tıbbi adı rinoplasti olan burun estetiği, burnun nefes alma gibi
              fonksiyonel durumunu yerine getirmesi ya da daha iyi bir görünüm
              kazanması için burnun boyutu ve şeklinin değiştirildiği cerrahi
              bir işlemdir. Rinoplasti ideal nefes alma fonksiyonuna sahip ve
              yüzün tamamına uyumlu bir burnun elde edilmesi için
              gerçekleştirilir. Estetik nedenlerle veya yapısal bir sorunu
              düzeltmek için uygulanan rinoplasti yani burun estetiği estetik
              ameliyatlar arasında en sık tercih edilen operasyon türüdür.
            </p>
          </div>
          <p className="text-[17px] leading-[19px]  mt-6">
            Hastanemiz, “European Association of Echocardiography” kardiyoloji
            akreditasyonu ve Kuzey Amerika standartlarındaki klinik akış ve
            algoritmalarıyla 21. yüzyılın getirdiği sağlık alanındaki
            beklentilere yanıt vermeye devam ediyor.
          </p>
        </>
      )}
    </div>
  );
};
