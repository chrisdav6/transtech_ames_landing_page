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

      <div className='tagline' aria-hidden='true'>
        Together <span>In</span> Quality
      </div>

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
            onCanPlay={(event) => event.currentTarget.classList.add('is-ready')}
            onPlaying={(event) => event.currentTarget.classList.add('is-ready')}
          >
            <source src={company.video} type='video/mp4' />
          </video>

          <img
            className='panel-poster'
            src={company.poster}
            alt=''
            aria-hidden='true'
          />

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
              <span aria-hidden='true'> &#x2794;&#xFE0E;</span>
            </span>
          </a>
        </section>
      ))}
    </main>
  );
}
