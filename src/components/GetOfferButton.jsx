import { useGetOffer } from "../context/GetOfferProvider";

export const GetOfferButton = () => {
  const { getOffer, setGetOffer } = useGetOffer();
  return (
    <button onClick={() => setGetOffer(true)} className="">
      <img src="./home/teklif-al.png" />
    </button>
  );
};
