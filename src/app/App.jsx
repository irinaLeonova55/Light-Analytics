import LandingPage from '../pages/landing/ui/LandingPage';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import PublicOffer from "@/pages/public-offer/ui/PublicOffer.jsx";
import Privacy from "@/pages/privacy/ui/Privacy.jsx";
import CookiePolicy from "@/pages/cookie-policy/ui/CookiePolicy.jsx";
import TechSupportPolicy from "@/pages/tech-support-policy/ui/TechSupportPolicy.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Все пути теперь начинаются с /promo */}
                <Route path="/promo" element={<LandingPage />} />
                <Route path="/promo/public-offer" element={<PublicOffer />} />
                <Route path="/promo/privacy" element={<Privacy />} />
                <Route path="/promo/cookie" element={<CookiePolicy />} />
                <Route path="/promo/tech-support-policy" element={<TechSupportPolicy />} />
                <Route path="*" element={<Navigate to="/promo" replace />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;