import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Explainer from '@/components/sections/Explainer';
import Process from '@/components/sections/Process';
import DeriskBand from '@/components/sections/DeriskBand';
import Differentiators from '@/components/sections/Differentiators';
import Pricing from '@/components/sections/Pricing';
import Faq from '@/components/sections/Faq';
import ClosingCta from '@/components/sections/ClosingCta';

export default function Page() {
  return (
    <>
      <NavBar />
      <ScrollProgress />
      <main>
        <Hero />
        <Problem />
        <Explainer />
        <Process />
        <DeriskBand />
        <Differentiators />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
