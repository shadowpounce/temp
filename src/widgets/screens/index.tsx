import { About } from './ui/about/about';
import { Company } from './ui/company/company';
import { Hero } from './ui/hero/hero';
import { Newsletter } from './ui/newsletter/newsletter';
import { Services } from './ui/services/services';
import ReactFullpage from '@fullpage/react-fullpage';
import clsx from 'clsx';
import marqueeStyles from '../../shared/ui/marquee/marquee.module.scss';
import aboutStyles from '../screens/ui/about/about.module.scss';

interface Item {
  index: number;
  // Other properties...
}

export const Screens = () => {
  const onLeave = (origin: Item, destination: Item, direction: string) => {
    const transitionVideo = document.querySelector(`#transition-video video`) as HTMLElement;
    const aboutVideo = document.querySelector('#about-video') as HTMLVideoElement;
    const aboutScreen = document.querySelector('#about') as HTMLElement;
    const device = document.querySelector('#device') as HTMLElement;
    const deviceVideo = document.querySelector('#device-video') as HTMLElement;

    if (origin.index === 0) {
      transitionVideo?.classList.add(clsx(marqueeStyles.transition_video));

      const transVideo = transitionVideo.closest(`#transition-video`) as HTMLElement;

      transVideo.style.animationPlayState = `paused`;

      const marquee = document.querySelector(`._marquee_10han_1`) as HTMLElement;

      // transitionVideo.style.translate = `-${marquee.offsetLeft}px 0`;
      setTimeout(() => {
        aboutVideo.style.opacity = `1`;
      }, 800);
    }

    if (origin.index === 1) {
      if (direction === 'down') {
        aboutVideo.classList.remove(clsx(aboutStyles.toUp));
        aboutVideo.classList.add(clsx(aboutStyles.toDown));
      }
    }

    if (origin.index === 2) {
      if (direction === 'up') {
        aboutVideo.classList.remove(clsx(aboutStyles.toDown));
        aboutVideo.classList.add(clsx(aboutStyles.toUp));
      }
    }
  };

  return (
    <ReactFullpage
      credits={{
        enabled: false,
      }}
      onLeave={onLeave}
      afterLoad={() => {
        const video = document.querySelector('#about-video') as HTMLVideoElement;
        video.play();
      }}
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1500} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Hero />
            <About />
            <Company />
            <Services fullpage={state} />
            <Newsletter />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
