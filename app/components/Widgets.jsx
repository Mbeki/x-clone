import { IoIosSearch } from 'react-icons/io';
import News from './News';
import Image from 'next/image';

async function getNews() {
  const newsResults = await fetch(
    'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json',
  );
  if (!newsResults.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return await newsResults.json();
}

async function getSuggestions() {
  const friendSuggestions = await fetch(
    'https://randomuser.me/api/?results=30&inc=name,login,picture',
  );
  if (!friendSuggestions.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return await friendSuggestions.json();
}

async function Widgets() {
  const { articles: newsResults } = await getNews();
  const { results: randomUsers } = await getSuggestions();
  let articleNum = 3;
  let randUserNum = 3;

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
      <div className='w-[90%] space-y-3 rounded-xl bg-gray-100 pt-2 text-gray-700 xl:w-[75%]'>
        <h4 className='px-4 text-xl font-bold'>What&apos;s happening</h4>
        {newsResults.slice(0, articleNum).map(article => (
          <News key={article.id} article={article} />
        ))}
        <button className='pb-3 pl-4 text-blue-300 hover:text-blue-400'>
          Show more
        </button>
      </div>
      <div className='sticky top-16 w-[90%] space-y-3 rounded-xl bg-gray-100 pt-2 text-gray-700 xl:w-[75%]'>
        <h4 className='px-4 text-xl font-bold'>Who to follow</h4>
        {randomUsers.slice(0, randUserNum).map(randomUser => (
          <div
            key={randomUser.login.username}
            className='flex cursor-pointer items-center px-4 py-2 hover:bg-gray-200'
          >
            <Image
              src={randomUser.picture.thumbnail}
              width={24}
              height={24}
              alt='suggested follow'
              className='rounded-full'
            />
            <div className='ml-4 truncate leading-5'>
              <h4 className='truncate text-[14px] font-bold hover:underline'>
                {randomUser.login.username}
              </h4>
              <h5 className='truncate text-[13px] text-gray-500'>
                {randomUser.name.first + ' ' + randomUser.name.last}
              </h5>
            </div>
            <button className='ml-auto rounded-full bg-black px-3.5 py-1.5 text-sm font-bold text-white'>
              Follow
            </button>
          </div>
        ))}
        <button className='pb-3 pl-4 text-blue-300 hover:text-blue-400'>
          Show more
        </button>
      </div>
    </div>
  );
}

export default Widgets;
