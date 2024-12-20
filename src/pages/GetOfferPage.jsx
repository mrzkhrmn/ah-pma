import { useState } from "react";
import { GetOfferCard } from "../components/home/get-offer/GetOfferCard";
import { FormInput } from "../components/FormInput";

export const GetOfferPage = () => {
  const operationsData = [
    {
      name: "Burun",
      img: "./home/eyes.png",
      operations: ["Burun kırma", "Burun Düzeltme", "Burun küçültme"],
    },
    {
      name: "Göğüs",
      img: "./home/eyes.png",
      operations: ["Göğüs kırma", "Göğüs Düzeltme", "Göğüs küçültme"],
    },
    {
      name: "Saç",
      img: "./home/eyes.png",
      operations: ["Saç ekme", "Saç biçme"],
    },
    {
      name: "Kalça",
      img: "./home/eyes.png",
      operations: ["Kalça Büyütme"],
    },
    {
      name: "Göz",
      img: "./home/eyes.png",
      operations: ["Göz Çizdirme"],
    },
    {
      name: "Dudak",
      img: "./home/eyes.png",
      operations: ["Dudak Dolgu"],
    },
    {
      name: "Ayak",
      img: "./home/eyes.png",
      operations: ["Topuk Dikeni"],
    },
  ];
  const [selectedOperations, setSelectedOperations] = useState([]);

  const handleClickOperation = (operation) => {
    const operationExists = selectedOperations.find(
      (opr) => opr.name === operation.name
    );

    if (operationExists) {
      setSelectedOperations(
        selectedOperations.filter((opr) => operation.name !== opr.name)
      );
    } else {
      setSelectedOperations([...selectedOperations, operation]);
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
        <div className="w-full flex justify-center items-center flex-col mt-16 gap-12 lg:px-0 px-8">
          <img alt="number1" src="./home/number1.png" />
          <h1 className=" lg:text-[40px] lg:leading-[46px] text-[28px] leading-[32px] text-primary">
            Lütfen ilgilendiğiniz operasyon tipini seçin:
          </h1>
          <div>
            <div className="flex xl:flex-nowrap  flex-wrap justify-center items-center lg:gap-x-8 gap-4 ">
              {operationsData.map((operation, index) => (
                <GetOfferCard
                  key={index}
                  offer={operation}
                  onClick={() => handleClickOperation(operation)}
                />
              ))}
            </div>
            <h2 className="text-[24px] leading-[27px] text-center text-primary mt-8">
              Seçili operasyon ile ilgili işlemler:
            </h2>
            <div className="text-[16px] leading-[18px] text-primary  flex items-center justify-center gap-4 mt-6 flex-wrap max-w-[800px]">
              {selectedOperations.map((opr) =>
                opr.operations.map((operations) => <span>{operations}</span>)
              )}
            </div>
          </div>
          <img alt="number2" src="./home/number2.png" className="mt-16" />
          <div className="max-w-[580px] mx-auto mt-0 lg:mt-12">
            <h1 className=" lg:text-[40px] text-[28px] lg:leading-[46px] leading-[32px] text-primary text-center ">
              Lütfen iletişim bilgilerinizi girin:
            </h1>

            <form className="mt-6 flex flex-col  items-center gap-4">
              <div className="flex lg:flex-row flex-col items-center justify-between w-full gap-6">
                <FormInput
                  label={"Ad"}
                  placeholder={"johndoe"}
                  type={"text"}
                  id={"name"}
                />
                <FormInput
                  label={"Soyad"}
                  placeholder={"***"}
                  type={"text"}
                  id={"surname"}
                />
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-between w-full gap-6">
                <FormInput
                  label={"Email"}
                  type={"email"}
                  placeholder={"johndoe@gmail.com"}
                  id={"email"}
                />
                <div className="flex flex-col gap-1 w-full">
                  <label
                    className="text-[16px] leading-[18px] text-primary"
                    htmlFor="phoneNumber"
                  >
                    Phone
                  </label>
                  <div className="flex items-center gap-1">
                    <select className="border border-[#D8D6DE] rounded-md p-2">
                      <option>+90</option>
                    </select>
                    <input
                      type="text"
                      id="phoneNumber"
                      placeholder="***"
                      className="border border-[#D8D6DE] rounded-md px-4 py-2 text-[14px] leading-[24px]  placeholder:black/50 "
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 justify-start ">
                <div className="w-[18px] h-[18px] mt-1 border flex items-center justify-center border-primary rounded-sm">
                  <input type="checkbox" className="h-[18px] w-[18px]" />
                </div>
                <p className="text-[14px] leading-[21px] text-primary">
                  Platformu kullanmaya devam ederek üyelik koşullarını ve
                  kişisel verilerimin korunmasını kabul ediyorum.
                </p>
              </div>

              <button
                type="submit"
                className="border w-[100px] text-white border-primary bg-primary rounded-lg py-2 mt-4 text-[14px] font-semibold"
              >
                Teklif Al
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
