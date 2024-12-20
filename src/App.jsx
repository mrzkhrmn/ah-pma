import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import "./App.css";
import { GetOfferProvider } from "./context/GetOfferProvider";
import { GetOfferPage } from "./pages/GetOfferPage";

function App() {
  return (
    <GetOfferProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-offer" element={<GetOfferPage />} />
      </Routes>
    </GetOfferProvider>
  );
}

export default App;
