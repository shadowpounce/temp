import { Hero } from './ui/hero/hero';
import { Newsletter } from './ui/newsletter/newsletter';
import { Company } from './ui/company/company';
import { About } from './ui/about/about';
import { Services } from './ui/services/services';

export const Screens = () => {
  return (
    <>
      <Hero />
      <About />
      <Company />
      <Services />
      <Newsletter />
    </>
  );
};
