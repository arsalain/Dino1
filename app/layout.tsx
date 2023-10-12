'use client';

import './globals.css'
import {useEffect} from 'react'
import type { Metadata } from 'next'
import { Varela_Round, Roboto, Oswald } from 'next/font/google';
import { metadata } from './metadata'; 
import Head from 'next/head';


const varelaRound = Varela_Round({ weight: '400', subsets: ['latin'] });

const roboto = Roboto({ weight: ['100', '400', '700'], subsets: ['latin'] }); 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Importing AOS and initializing inside useEffect
    const AOS = require('aos');
    AOS.init({
      // Optionally, you can define AOS settings here, for example:
      duration: 1000,
      // once: true,
    });
  }, []);
  return (
    
    <html lang="en">
           <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={varelaRound.className}>
  {children}
</body>
    </html>
  )
}
