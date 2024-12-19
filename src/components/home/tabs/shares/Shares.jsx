import { SharesCard } from "./SharesCard";
import { GetOfferButton } from "../../../GetOfferButton";

export const Shares = () => {
  return (
    <div className="flex items-start justify-between mt-6 gap-[165px]">
      {/* Filter*/}
      <div className="flex flex-col gap-2 bg-[#CECECE]/20 p-6 border border-dashed border-[#cecece] rounded-md">
        <p className="text-[16px] leading-[19px]">Filtreleme</p>
        <div className="flex flex-col items-start gap-4  text-primary">
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
      <div className="flex flex-col justify-center items-center gap-8">
        <SharesCard
          key={1}
          title={"Artık Yılların Hesabını Yapmayın..."}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
        />
        <SharesCard
          key={2}
          title={"Bölgesel zayıflama uygulamalarının süresi......"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. . "
          }
        />
        <SharesCard
          key={3}
          title={"Kaş kaldırma yöntemleri nelerdir?..."}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          }
        />
      </div>
      <GetOfferButton />
    </div>
  );
};
