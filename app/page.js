import Image from 'next/image';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';

export default function Home() {
  return (
    <main className='mx-auto flex min-h-screen'>
          <Sidebar />
          <Feed />
          <Widgets />

        </main>
   
      
   
  );
}
