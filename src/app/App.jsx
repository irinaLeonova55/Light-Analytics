import LandingPage from '../pages/landing/ui/LandingPage';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import PublicOffer from "@/pages/public-offer/ui/PublicOffer.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/promo" element={<LandingPage />} />
          <Route path="/public-offer" element={<PublicOffer />} />
          <Route path="*" element={<Navigate to="/promo" replace />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;