import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'X Clone',
  description: 'Created with Nextjs andTailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='mx-auto flex min-h-screen max-w-7xl'>
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
