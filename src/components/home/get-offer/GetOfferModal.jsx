import { Button, Modal } from "flowbite-react";
import { useGetOffer } from "../../../context/GetOfferProvider";
import { GetOfferCard } from "./GetOfferCard";
import { FormInput } from "../../FormInput";

export const GetOfferModal = ({ openModal, setOpenModal }) => {
  const offersData = [
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

  return (
    <Modal
      className="get-offer-modal "
      show={openModal}
      size={"5xl"}
      onClose={() => setOpenModal(false)}
      dismissible
    >
      <Modal.Body className="2xl:overflow-y-hidden overflow-y-visible">
        <div className="max-w-[900px] mx-auto mt-6 lg:pb-16 pb-0">
          <h1 className=" lg:text-[40px] lg:leading-[46px] text-[28px] leading-[32px] text-primary text-center">
            Lütfen ilgilendiğiniz operasyon tipini seçin:
          </h1>
          <div className="flex xl:flex-nowrap  flex-wrap justify-center items-center lg:gap-x-8 gap-4 mt-12">
            {offersData.map((offer, index) => (
              <GetOfferCard key={index} offer={offer} onClick={() => ""} />
            ))}
          </div>
          {/* Form */}
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
              <div className="flex flex-col  gap-1 w-full">
                <label
                  className="text-[16px] leading-[18px] text-primary"
                  htmlFor="message"
                >
                  Mesajınız
                </label>
                <div className="flex items-center gap-4">
                  <textarea
                    style={{ resize: "none" }}
                    id="message"
                    placeholder="Mesajınız"
                    className="border border-[#D8D6DE] rounded-md px-4 py-2 text-[14px] leading-[24px]  placeholder:black/50 w-full h-[140px]"
                  />
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
                className="border w-[100px] text-white border-primary bg-primary rounded-lg py-2  text-[14px] font-semibold"
              >
                Teklif Al
              </button>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
