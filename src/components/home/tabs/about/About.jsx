import { useState, useRef } from "react";
import { useMouseDrag } from "../../../../hooks/useMouseDrag";

export const About = () => {
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    ourRef,
  } = useMouseDrag();

  return (
    <div className=" lg:max-w-[800px]  flex flex-col  justify-center items-center">
      <div className="flex items-start">
        <div>
          <div className="flex lg:flex-row flex-col lg:items-start items-center   w-full">
            <img
              src="./home/hospital.png"
              alt="hospitalImage"
              className="object-contain object-center lg:w-auto w-[80%]"
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
          <div className="text-[14px] leading-[17px] mt-6 md:pr-[47px] pr-0">
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
          <div className="mt-6 flex lg:flex-row flex-col justify-between items-start md:pr-10 pr-0 lg:gap-[76px] gap-4">
            <p className="text-[20px] leading-[24px] font-semibold">
              Amerikan Hastanesi’nin ülkemizin sağlık sektörünün gelişimindeki
              önemli rolünün farkında olan ekibimiz, alanındaki tüm yenilik ve
              teknolojileri yakından takip ederek, bu hizmetleri en hızlı ve
              güvenilir biçimde hastalarının hizmetine sunmak için çalışıyor.
            </p>
            <img src="./home/personel.png" alt="personelImg" />
          </div>
        </div>
      </div>
      <div
        className="mt-10 xl:w-[1444px] xl:ml-[80%] ml-0 flex overflow-x-auto  gap-6 scroll"
        ref={ourRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <img src="./home/customer.png" alt="customerImg" draggable={false} />
        <img src="./home/customer.png" alt="customerImg" draggable={false} />
        <img src="./home/customer.png" alt="customerImg" draggable={false} />
        <img src="./home/customer.png" alt="customerImg" draggable={false} />
        <img src="./home/customer.png" alt="customerImg" draggable={false} />
        <img src="./home/customer.png" alt="customerImg" draggable={false} />
      </div>
    </div>
  );
};
