'use client';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

function page() {
  return (
    <div className='mt-20 flex justify-center space-x-4'>
      <Image
        src='https://sunwayuniversity.edu.my/sites/default/files/styles/three_by_two_max_width_1200px/public/2024-01/elon_musk.jpg.jpg?itok=FrPo-Q9g'
        alt='x log on phone'
        width={248}
        height={400}
        className='hidden rotate-6 object-cover md:inline-flex'
      />
      <div className=''>
        <div className='flex flex-col items-center'>
          <Image
            src='https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_square_x_icon_256075.png'
            width={144}
            height={144}
            alt='twitter logo'
            className='object-cover'
          />
          <p className='space my-10 text-center text-sm'>
            This app is created for learning purposes
          </p>
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className='rounded-lg bg-red-400 p-3 text-white hover:bg-red-500'
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
