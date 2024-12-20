import { useGetOffer } from "../context/GetOfferProvider";

export const GetOfferButton = () => {
  const { getOffer, setGetOffer } = useGetOffer();
  return (
    <button
      onClick={() => setGetOffer(true)}
      className="lg:w-[155px] sm:w-[125px] w-[90px] sm:relative lg:top-0 lg:left-0 right fixed"
    >
      <img src="./home/teklif-al.png" />
    </button>
  );
};
