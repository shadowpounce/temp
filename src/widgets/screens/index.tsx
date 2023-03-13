import { useState } from 'react';
import { About } from './ui/about/about';
import { Company } from './ui/company/company';
import { Hero } from './ui/hero/hero';
import { HeroMarquee } from './ui/hero_components';
import { Newsletter } from './ui/newsletter/newsletter';
import { Services } from './ui/services/services';
import ReactFullpage from '@fullpage/react-fullpage';
import clsx from 'clsx';
//Scenes
import Cursor from 'shared/ui/cursor/cursor';
import marqueeStyles from '../../shared/ui/marquee/marquee.module.scss';
import aboutStyles from '../screens/ui/about/about.module.scss';
import companyStyles from './ui/company/company.module.scss';
import heroStyles from './ui/hero/hero.module.scss';
import heroMarqueeStyles from './ui/hero_components/hero-marquee/hero-marquee.module.scss';

interface Item {
  index: number;
}

export const Screens = () => {
  const [servicesSection, setServicesSection] = useState(false);

  const onLeave = (origin: Item, destination: Item, direction: string) => {
    const transitionVideo = document.querySelector(`#transition-video video`) as HTMLElement;

    const aboutVideo = document.querySelector('#about-video') as HTMLVideoElement;
    const deviceFrame = document.querySelector('#device') as HTMLElement;

    if (origin.index === 0) {
      if (direction === 'down') {
        transitionVideo
          .closest(`.${marqueeStyles.marquee_wrapper}`)
          .querySelectorAll<HTMLElement>(`.${marqueeStyles.marquee_item}`)
          .forEach((item) => {
            item.classList.add(clsx(marqueeStyles.back));
          });

        setTimeout(() => {
          transitionVideo?.classList.add(clsx(marqueeStyles.transition_video));
        }, 200);
      }

      document.querySelectorAll<HTMLElement>(`.${marqueeStyles.marquee_item}`).forEach((video) => {
        if (video !== transitionVideo.closest('#transition-video')) {
          video.style.opacity = `0`;

          transitionVideo.closest('#transition-video').querySelector('img').style.opacity = `0`;

          transitionVideo
            .closest('#transition-video')
            .querySelectorAll<HTMLElement>(
              `.${heroMarqueeStyles.marquee_item_container}`
            )[1].style.opacity = `0`;
        }
      });

      setTimeout(() => {
        aboutVideo.style.opacity = `1`;
        transitionVideo.classList.add(clsx(marqueeStyles.hidden));
      }, 1000);
    }

    if (origin.index === 1) {
      if (direction === 'down') {
        aboutVideo.classList.remove(clsx(aboutStyles.toUp));
        aboutVideo.classList.add(clsx(aboutStyles.toDown));
        deviceFrame.classList.add(clsx(companyStyles.visible));
      }
    }

    if (origin.index === 2) {
      if (direction === 'up') {
        aboutVideo.classList.remove(clsx(aboutStyles.toDown));
        aboutVideo.classList.add(clsx(aboutStyles.toUp));
        deviceFrame.classList.remove(clsx(companyStyles.visible));
      }
    }
  };

  return (
    <>
      <Cursor />

      <ReactFullpage
        credits={{
          enabled: false,
        }}
        onLeave={onLeave}
        afterLoad={(origin: Item) => {
          if (window.fullpage_api.getActiveSection().item.id === 'hero') {
            document
              .querySelectorAll<HTMLElement>(`.${marqueeStyles.marquee_item}`)
              .forEach((marquee) => {
                marquee.style.opacity = `1`;
              });
          }
          if (window.fullpage_api.getActiveSection().item.id === `services`) {
            setServicesSection(true);
          }
          if (window.fullpage_api.getActiveSection().item.id === `company`) {
            const deviceFrame = document.querySelector('#device') as HTMLElement;

            const aboutVideo = document.querySelector('#about-video') as HTMLVideoElement;

            aboutVideo.classList.remove(clsx(aboutStyles.toUp));
            aboutVideo.classList.add(clsx(aboutStyles.toDown));

            if (!deviceFrame.classList.contains(clsx(companyStyles.visible))) {
              deviceFrame.classList.add(clsx(companyStyles.visible));
            }
          }
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
              <HeroMarquee className={heroStyles.hero_marquee} />
              <Company />
              <video
                className={`img-cover ${aboutStyles.about_video}`}
                id="about-video"
                src="/video/hero/v-1.webm"
                playsInline
                autoPlay
                muted
                loop
              />

              <Services fullpage={servicesSection} />
              <Newsletter />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};
