import Image from 'next/image';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { BsEmojiSmile } from 'react-icons/bs';

function Input() {
  return (
    <div className='flex space-x-3 border-b border-gray-200 p-3'>
      <div>
        <Image
          src='https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg'
          alt='user'
          width={44}
          height={44}
          className='cursor-pointer rounded-full hover:brightness-95'
        />
      </div>

      <div className='w-full divide-y divide-gray-200'>
        <div className=''>
          <textarea
            className='min-h-[50px] w-full border-none text-lg tracking-wide text-gray-700 placeholder-gray-700 focus:ring-0'
            row='2'
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className='items--center flex justify-between p-2.5'>
          <div className='flex'>
            <HiOutlinePhotograph
              size={28}
              className='hover-effect p-2 text-sky-500 hover:bg-sky-100'
            />
            <BsEmojiSmile
              size={28}
              className='hover-effect p-2 text-sky-500 hover:bg-sky-100'
            />
          </div>
          <button className='rounded-full bg-blue-400 px-4 py-1 font-bold text-white shadow-md hover:brightness-95 disabled:opacity-50'>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
