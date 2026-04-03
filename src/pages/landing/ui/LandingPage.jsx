import Header from '@/widgets/header/ui/Header';
import Metrics from '@/widgets/metrics/ui/Metrics';
import Features from '@/widgets/features/ui/Features';
import Video from '@/widgets/video/ui/Video';
import Faq from '@/widgets/faq/ui/Faq';
import Sellers from '@/widgets/sellers/ui/Sellers';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Video />
        <Metrics />
        <Features />
        <Sellers />
        <Faq />
      </main>
    </>
  );
};

export default LandingPage;
