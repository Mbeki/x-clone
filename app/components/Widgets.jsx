import { IoIosSearch } from 'react-icons/io';
function Widgets() {
  return (
    <div className='ml-8 hidden space-y-5 lg:inline xl:w-[600px]'>
      <div className='sticky top-0 z-50 w-[90%] bg-white py-1.5 xl:w-[75%]'>
        <div className='relative flex items-center rounded-full p-3'>
          <IoIosSearch size={20} className='z-50 text-gray-500' />
          <input
            type='text'
            placeholder='Search X'
            className='absolute inset-0 rounded-full border-gray-500 bg-gray-100 pl-11 text-gray-700 focus:bg-white focus:shadow-lg'
          />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
