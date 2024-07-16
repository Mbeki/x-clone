import Image from 'next/image';
import { BsThreeDots } from 'react-icons/bs';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { GoTrash } from 'react-icons/go';
import { FaRegHeart } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import { HiOutlineChartBar } from 'react-icons/hi';

function Post({ post }) {
  return (
    <div className='flex cursor-pointer border-b border-gray-200 p-3'>
      {/* user mage */}
      <div className='pt-3'>
        <Image
          src={post.userimg}
          alt='user'
          width={44}
          height={44}
          className='mr-4 cursor-pointer rounded-full hover:brightness-95'
        />
      </div>

      {/* right side */}
      <div className='ml-1'>
        {/* Header */}
        <div className='flex items-center justify-between'>
          {/* user info */}
          <div className='flex items-center space-x-1 whitespace-nowrap'>
            <h4 className='text-[15px] font-bold hover:underline sm:text-[16px]'>
              {post.name}
            </h4>
            <span className='text-sm sm:text-[15px]'>@{post.username} - </span>
            <span className='text-sm hover:underline sm:text-[15px]'>
              {post.timestamp}
            </span>
          </div>
          {/* doticon */}
          <BsThreeDots
            size={24}
            className='hover-effect p-2 hover:bg-sky-100 hover:text-sky-500'
          />
        </div>
        {/* post text */}
        <p className='mb-2 text-[15px] text-gray-800 sm:text-[16px]'>
          {post.text}
        </p>
        {/* post image */}
        <Image
          src={post.img}
          sizes='100vw'
          className='mr-2 w-full rounded-2xl object-cover'
          width={0}
          height={0}
          style={{ width: '100%' }}
          alt='post image'
        />
        {/* icons */}
        <div className='flex justify-between p-4 text-gray-500'>
          <IoChatbubbleEllipsesOutline
            size={24}
            className='hover-effect p-2 hover:bg-sky-100 hover:text-sky-500'
          />
          <GoTrash
            size={24}
            className='hover-effect p-2 hover:bg-red-100 hover:text-red-600'
          />
          <FaRegHeart
            size={24}
            className='hover-effect p-2 hover:bg-red-100 hover:text-red-600'
          />
          <IoShareSocialOutline
            size={24}
            className='hover-effect p-2 hover:bg-sky-100 hover:text-sky-500'
          />
          <HiOutlineChartBar
            size={24}
            className='hover-effect p-2 hover:bg-sky-100 hover:text-sky-500'
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
