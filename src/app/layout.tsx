import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BottomNavbar from '@/components/shared/BottomNavbar';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SkillHub Connect | The Premium Marketplace for Skilled Professionals',
  description:
    'The premier platform connecting skilled professionals with exciting projects. Find or hire top talent, seamlessly manage projects, and build a thriving career.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          {children}
          {session && <BottomNavbar />}
        </body>
      </html>
    </SessionProvider>
  );
}
