import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ModalProvider } from '@/components/modalprovider';
import { ToasterProvider } from '@/components/toasterprovider';
import { CrispProvider } from '@/components/crispprovider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Knowsly',
  description: 'AI saas platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
