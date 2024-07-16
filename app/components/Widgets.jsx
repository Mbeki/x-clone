import { IoIosSearch } from 'react-icons/io';
import News from './News';

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

async function Widgets() {
  const { articles: newsResults } = await getNews();
  let articleNum = 3;

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
    </div>
  );
}

export default Widgets;
