import { createContext, useContext, useState } from "react";

const GetOfferContext = createContext();

export const GetOfferProvider = ({ children }) => {
  const [getOffer, setGetOffer] = useState(false);

  return (
    <GetOfferContext.Provider value={{ getOffer, setGetOffer }}>
      {children}
    </GetOfferContext.Provider>
  );
};

export const useGetOffer = () => {
  const context = useContext(GetOfferContext);
  if (!context) {
    throw new Error("getOffer must b used within an GetOfferProvider");
  }
  return context;
};
