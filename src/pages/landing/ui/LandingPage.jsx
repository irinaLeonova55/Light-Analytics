import Header from '@/widgets/header/ui/Header';
import Pricing from '@/widgets/pricing/ui/Pricing';
import Metrics from '@/widgets/metrics/ui/Metrics';
import Features from '@/widgets/features/ui/Features';
import Video from '@/widgets/video/ui/Video';
import Faq from '@/widgets/faq/ui/Faq';
import Sellers from '@/widgets/sellers/ui/Sellers';
import Marketplaces from '@/widgets/marketplaces/ui/Marketplaces';
import Cta2 from '@/widgets/cta2/ui/Cta2';
import Cta1 from '@/widgets/cta/ui/Cta1';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Video />
        <Pricing />
        <Metrics />
        <Features />
        <Sellers />
        <Marketplaces />
        <Cta1 />
        <Faq />
        <Cta2 />
      </main>
    </>
  );
};

export default LandingPage;
