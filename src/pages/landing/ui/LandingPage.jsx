import { useState, useEffect } from 'react';

import Header from '@/widgets/header/ui/Header';
import Hero from '@/widgets/hero/ui/Hero';
import Solutions from '@/widgets/solutions/ui/Solutions';
import Signup from '@/widgets/signup/ui/Signup';
import AllInOne from '@/widgets/allInOne/ui/allInOne';
import Pricing from '@/widgets/pricing/ui/Pricing';
import Metrics from '@/widgets/metrics/ui/Metrics';
import Features from '@/widgets/features/ui/Features';
import Video from '@/widgets/video/ui/Video';
import Faq from '@/widgets/faq/ui/Faq';
import Sellers from '@/widgets/sellers/ui/Sellers';
import Marketplaces from '@/widgets/marketplaces/ui/Marketplaces';
import Cta2 from '@/widgets/cta2/ui/Cta2';
import Cta1 from '@/widgets/cta/ui/Cta1';
import Testimonials from '@/widgets/testimonials/ui/Testimonials';
import Footer from '@/widgets/footer/ui/Footer';
import Burger from '@/shared/ui/burger/ui/Burger';
import Modal from '@/widgets/modal/ui/Modal';

const LandingPage = () => {
  const [isBurger, setIsBurger] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isBurger ? 'hidden' : 'auto';
  }, [isBurger]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsBurger(false);
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <Header setIsBurger={setIsBurger} />
      <main>
        <Hero setIsModalOpen={setIsModalOpen} />
        <Video />
        <Solutions />
        <AllInOne />
        <Pricing />
        <Metrics />
        <Features />
        <Signup setIsModalOpen={setIsModalOpen} />
        <Sellers />
        <Marketplaces />
        <Testimonials />
        <Cta1 setIsModalOpen={setIsModalOpen} />
        <Faq />
        <Cta2 setIsModalOpen={setIsModalOpen} />
      </main>
      <Footer />

      <Burger setIsBurger={setIsBurger} isBurger={isBurger} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default LandingPage;
