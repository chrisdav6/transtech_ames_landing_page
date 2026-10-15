'use client';

const companies = [
  {
    name: 'TransTech Systems',
    logo: '/images/transtech-logo.svg',
    video: '/videos/transtech.mp4',
    poster: '/images/transtech-poster.jpg',
    url: 'https://www.transtechsys.com',
    className: 'transtech',
  },
  {
    name: 'Ames Engineering',
    logo: '/images/ames-logo.svg',
    video: '/videos/ames.mp4',
    poster: '/images/ames-poster.jpg',
    url: 'https://www.amesengineering.com',
    className: 'ames',
  },
];

export default function Home() {
  return (
    <main className='landing'>
      <h1 className='sr-only'>
        Together in Quality — TransTech Systems and Ames Engineering
      </h1>

      {companies.map((company) => (
        <section
          key={company.name}
          className={`company-panel ${company.className}`}
        >
          <video
            className='panel-video'
            autoPlay
            muted
            loop
            playsInline
            preload='none'
            poster={company.poster}
            aria-hidden='true'
          >
            <source src={company.video} type='video/mp4' />
          </video>

          <div className='panel-overlay' />

          <a
            className='company-link'
            href={company.url}
            aria-label={`Visit ${company.name} website`}
          >
            <img
              className='company-logo'
              src={company.logo}
              alt={`${company.name} logo`}
            />
            <span className='visit-label'>
              Explore {company.name}
              <span aria-hidden='true'> ↗</span>
            </span>
          </a>
        </section>
      ))}
    </main>
  );
}
