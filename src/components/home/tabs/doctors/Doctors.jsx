import { GetOfferButton } from "../../../GetOfferButton";
import { DoctorCard } from "./DoctorCard";

const doctorsData = [
  {
    name: "Dyt. Aleyna Turan",
    expertise: "Beslenme ve Diyet",
  },
  {
    name: "Prof. Dr. Abdullah İğci",
    expertise: "Genel Cerrahi",
  },
  {
    name: "Dr. Aylin Şimşek",
    expertise: "Çocuk Sağlığı ve Hastalıkları",
  },
  {
    name: "Dr. A. Burçak Kabaoğlu",
    expertise: "Genel Cerrahi",
  },
  {
    name: "Dr. Mehmet Yıldız",
    expertise: "Ortopedi",
  },
  {
    name: "Dr. Zeynep Demir",
    expertise: "Dermatoloji",
  },
  {
    name: "Prof. Dr. Canan Yazıcı",
    expertise: "İç Hastalıkları",
  },
  {
    name: "Prof. Dr. Canan Yazıcı",
    expertise: "İç Hastalıkları",
  },
];

export const Doctors = ({ selectedDoctor, setSelectedDoctor }) => {
  return (
    <div className="w-full relative max-w-[800px]">
      {selectedDoctor === null ? (
        <div className=" max-w-[800px] flex gap-4 flex-wrap  lg:justify-start justify-center">
          {doctorsData.map((doctor, index) => (
            <DoctorCard
              key={index}
              doctor={doctor}
              setSelectedDoctor={setSelectedDoctor}
            />
          ))}
        </div>
      ) : (
        <div className=" mx-auto mt-6 flex lg:flex-row flex-col lg:items-start items-center gap-8">
          <DoctorCard doctor={selectedDoctor} setSelectedDoctor={() => ""} />
          <div className="flex flex-col gap-8 lg:pr-14 pr-0 lg:items-start items-center">
            <p className="font-semibold text-[20px] leading-[24px]">
              {" "}
              Amerikan Hastanesi bir asrı geride bırakırken, tecrübelerini en
              güncel teknolojik ve bilimsel yaklaşımlarla birleştirerek, sağlık
              alanındaki beklentilere yanıt vermeye devam ediyor.
            </p>
            <p className="text-[14px] leading-[17px]">
              Vehbi Koç Vakfı çatısı altında yer alan Amerikan Hastanesi, 100
              yıllık bilgi birikimi ve tecrübesiyle en güncel teknolojileri bir
              araya getirerek, kalite odaklı sağlık hizmetleri sunuyor.
              Hastalarımızla şeffaf iletişim kuran, güvenli ve kaliteli hasta
              bakım ve tedavisi sağlayan, sistemlerini sorgulayan ve geliştiren
              hastanemiz, sağlık sektöründeki lider pozisyonunu uluslararası
              kalite sertifikalarıyla destekliyor. 
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
