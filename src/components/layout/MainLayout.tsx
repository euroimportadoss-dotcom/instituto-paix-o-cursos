import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Mascot } from '@/components/mascot/Mascot';

interface MainLayoutProps {
  children: ReactNode;
  showMascot?: boolean;
}

export function MainLayout({ children, showMascot = true }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {showMascot && <Mascot />}
    </div>
  );
}
