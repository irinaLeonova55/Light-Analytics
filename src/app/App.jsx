import LandingPage from '../pages/landing/ui/LandingPage';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import PublicOffer from "@/pages/public-offer/ui/PublicOffer.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Все пути теперь начинаются с /promo */}
                <Route path="/promo" element={<LandingPage />} />
                <Route path="/promo/public-offer" element={<PublicOffer />} />
                <Route path="/promo/privacy" element={<PublicOffer />} /> {/* Для примера */}

                {/* Редирект на главную лендинга, если путь не найден */}
                <Route path="*" element={<Navigate to="/promo" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;