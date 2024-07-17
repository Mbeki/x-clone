import { HiOutlineSparkles } from 'react-icons/hi';
import Input from './Input';
import Post from './Post';
function Feed() {
  const posts = [
    {
      id: '1',
      name: 'Nixon Mbeki',
      username: 'nixonmbeki',
      userImg:
        'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg',
      img: 'https://res.cloudinary.com/dja66bd2c/image/upload/v1720116864/cld-sample-4.jpg',
      text: 'Delicacy for a king',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      name: 'Wokila Kusina',
      username: 'wokilakusina',
      userImg:
        'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg',
      img: 'https://res.cloudinary.com/dja66bd2c/image/upload/v1720116860/samples/coffee.jpg',
      text: 'Drink out in the jungle',
      timestamp: '1 hour ago',
    },
  ];
  return (
    <div className='max-w-xl flex-grow border-x border-gray-200 sm:ml-[73px] xl:ml-[370px] xl:min-w-[576px]'>
      <div className='sticky top-0 z-50 flex border-b border-gray-200 bg-white px-3 py-2'>
        <h2 className='cursor-pointer text-lg font-bold sm:text-xl'>Home</h2>
        <div className='hover-effect ml-auto flex h-9 w-9 items-center justify-center px-0'>
          <HiOutlineSparkles size={20} />
        </div>
      </div>
      <Input />
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
