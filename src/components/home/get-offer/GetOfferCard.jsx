import { useState } from "react";

export const GetOfferCard = ({ offer }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => setActive(!active)}
      className="flex flex-col items-center justify-center gap-3"
    >
      <div
        className={`${
          !active ? "bg-transparent text-black" : "bg-primary text-white"
        } flex flex-col justify-between border shadow-xl border-primary rounded-lg p-2 cursor-pointer`}
      >
        <div>
          <img src={offer.img} alt="offerImg" />
        </div>
        <span className="pt-3 text-center text-[16px] leading-[18px]">
          {offer.name}
        </span>
      </div>
      <img
        src="./home/confirm.png"
        alt="confirmImg"
        className={` object-contain ${active ? "opacity-100" : `opacity-0`}`}
      />
    </div>
  );
};
