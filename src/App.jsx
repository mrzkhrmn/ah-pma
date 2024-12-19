import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import "./App.css";
import { GetOfferProvider } from "./context/GetOfferProvider";

function App() {
  return (
    <GetOfferProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </GetOfferProvider>
  );
}

export default App;
