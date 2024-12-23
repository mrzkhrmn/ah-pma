import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import "./App.css";
import { GetOfferProvider } from "./context/GetOfferProvider";
import { GetOfferPage } from "./pages/GetOfferPage";
import { UserDashboard } from "./pages/UserDashboard";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <GetOfferProvider>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route path="/get-offer" element={<GetOfferPage />} />
        <Route path="/dashboard-user" element={<UserDashboard />} />
      </Routes>
    </GetOfferProvider>
  );
}

export default App;
