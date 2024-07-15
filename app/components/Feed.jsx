import { HiOutlineSparkles } from 'react-icons/hi';
import Input from './Input';
function Feed() {
  return (
    <div className='max-w-xl flex-grow border-x border-gray-200 sm:ml-[73px] xl:ml-[370px] xl:min-w-[576px]'>
      <div className='sticky top-0 z-50 flex border-b border-gray-200 bg-white px-3 py-2'>
        <h2 className='cursor-pointer text-lg font-bold sm:text-xl'>Home</h2>
        <div className='hover-effect ml-auto flex h-9 w-9 items-center justify-center px-0'>
          <HiOutlineSparkles size={20} />
        </div>
      </div>
      <Input />
    </div>
  );
}

export default Feed;
