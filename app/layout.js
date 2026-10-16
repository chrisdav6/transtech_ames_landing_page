import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Together in Quality | TransTech Systems & Ames Engineering',
  description:
    'Explore TransTech Systems, Inc. and Ames Engineering LLC, two trusted industry leaders united by quality, engineering expertise, innovative solutions, and customer commitment.',
  icons: {
    icon: '/images/favicon.png', // Points to public/images/favicon.png
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${roboto.className} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
