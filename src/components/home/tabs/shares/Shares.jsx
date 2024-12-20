import { SharesCard } from "./SharesCard";
import { GetOfferButton } from "../../../GetOfferButton";

export const Shares = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 lg:w-[800px] w-0">
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
  );
};
