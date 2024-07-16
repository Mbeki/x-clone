import { Inter } from 'next/font/google';
import './globals.css';
import { getServerSession } from 'next-auth';
import SessionProvider from './components/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'X Clone',
  description: 'Created with Nextjs andTailwind',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang='en'>
      <SessionProvider session={session}>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
