import { Plus_Jakarta_Sans } from 'next/font/google';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import NavBar from '@/components/navBar/NavBar';
import { ReduxProvider } from '@/components/shared/redux-provider';

const jarkata = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jarkata',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={` ${jarkata.variable}  `}>
      <body className='bg-[#f5f5f5]'>
        <ReduxProvider>
          <NavBar />
          <Toaster />
          <div className='px-6 md:px-0'>{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
