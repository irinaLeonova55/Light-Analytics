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

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Video />
        <Solutions />
        <AllInOne />
        <Pricing />
        <Metrics />
        <Features />
        <Signup />
        <Sellers />
        <Marketplaces />
        <Testimonials />
        <Cta1 />
        <Faq />
        <Cta2 />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
