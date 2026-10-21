'use client';
import { useEffect } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

const companies = [
  {
    name: 'TransTech Systems',
    logo: '/images/transtech-logo.svg',
    video: '/videos/transtech.mp4',
    poster: '/images/transtech-poster.jpg',
    url: 'https://www.transtechsys.com',
    className: 'transtech',
    analyticsEvent: 'transtech_outbound_click',
    tagline: 'Innovators of Non-Nuclear Density Technology',
  },
  {
    name: 'Ames Engineering',
    logo: '/images/ames-logo.svg',
    video: '/videos/ames.mp4',
    poster: '/images/ames-poster.jpg',
    url: 'https://www.amesengineering.com',
    className: 'ames',
    analyticsEvent: 'ames_outbound_click',
    tagline: 'The Leaders In Road Profiling Technology',
  },
];

function PanelVideo({ company }) {
  return (
    <>
      <video
        className='panel-video'
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        poster={company.poster}
        aria-hidden='true'
        onPlaying={(event) => {
          event.currentTarget.classList.add('is-ready');
        }}
        onError={(event) => {
          event.currentTarget.classList.remove('is-ready');
        }}
      >
        <source src={company.video} type='video/mp4' />
      </video>

      <img
        className='panel-poster'
        src={company.poster}
        alt=''
        aria-hidden='true'
      />
    </>
  );
}

export default function Home() {
  useEffect(() => {
    function restartLogoAnimations() {
      document.querySelectorAll('.company-logo').forEach((logo) => {
        logo.style.animation = 'none';

        // Force the browser to reset the animation.
        void logo.offsetHeight;

        // Restore the CSS animation.
        logo.style.animation = '';
      });
    }

    window.addEventListener('pageshow', restartLogoAnimations);

    return () => {
      window.removeEventListener('pageshow', restartLogoAnimations);
    };
  }, []);

  return (
    <main className='landing'>
      <h1 className='sr-only'>
        Together in Quality — TransTech Systems and Ames Engineering
      </h1>

      <div className='tagline' aria-hidden='true'>
        <span>Together</span>
        <span>In</span>
        <span>Quality</span>
      </div>

      {companies.map((company) => (
        <section
          key={company.name}
          className={`company-panel ${company.className}`}
        >
          <PanelVideo company={company} />

          <div className='panel-overlay' />

          <a
            className='company-link'
            href={company.url}
            aria-label={`Visit ${company.name} website`}
            onClick={() => {
              sendGAEvent('event', company.analyticsEvent, {
                destination: company.url,
                company_name: company.name,
              });
            }}
          >
            <img
              className='company-logo'
              src={company.logo}
              alt={`${company.name} logo`}
            />

            <p className='company-tagline'>{company.tagline}</p>

            <span className='visit-label'>
              Explore {company.name}
              <span aria-hidden='true'> &#x2794;&#xFE0E;</span>
            </span>
          </a>
        </section>
      ))}
    </main>
  );
}
