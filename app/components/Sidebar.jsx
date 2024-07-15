import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import { MdHome } from 'react-icons/md';
import { HiOutlineHashtag } from 'react-icons/hi';
import { HiOutlineBell } from 'react-icons/hi';
import { FaRegBookmark } from 'react-icons/fa6';
import { FaRegUser } from 'react-icons/fa6';
import { CiCircleMore } from 'react-icons/ci';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { BsThreeDots } from 'react-icons/bs';

function Sidebar() {
  return (
    <div className='fixed hidden h-full flex-col p-2 sm:flex xl:items-start'>
      {/* X logo */}
      <div className='hover-effect p-0 xl:px-1'>
        <Image
          src='https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_square_x_icon_256075.png'
          width={50}
          height={50}
          alt='twitter logo'
        />
      </div>
      {/* Menu */}
      <div className='mb-2.5 mt-4 xl:items-start'>
        <SidebarMenuItem text='home' Icon={MdHome} active />
        <SidebarMenuItem text='notifications' Icon={HiOutlineHashtag} />
        <SidebarMenuItem text='messages' Icon={HiOutlineBell} />
        <SidebarMenuItem text='bookmarks' Icon={FaRegBookmark} />
        <SidebarMenuItem text='lists' Icon={HiOutlineClipboardList} />
        <SidebarMenuItem text='user' Icon={FaRegUser} />
        <SidebarMenuItem text='more' Icon={CiCircleMore} />
      </div>
      {/* Button */}
      <button className='hidden h-12 w-56 rounded-full bg-blue-400 text-lg font-bold text-white shadow-md hover:brightness-95 xl:inline'>
        Post
      </button>
      {/* Mini-profile */}
      <div className='hover-effect mt-auto flex items-center justify-center text-gray-700 xl:justify-start'>
        <Image
          src='https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg'
          alt='user'
          width={40}
          height={40}
          className='rounded-full xl:mr-2'
        />
        <div className='hidden leading-5 xl:inline'>
          <h4 className='font-bold'>Nixon Mbeki</h4>
          <p className='text-gray-500'>@nixonmbeki</p>
        </div>
        <BsThreeDots size={24} className='hidden xl:ml-8 xl:inline' />
      </div>
    </div>
  );
}

export default Sidebar;
