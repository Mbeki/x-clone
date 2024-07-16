import Image from 'next/image';

function News({ article }) {
  return (
    <a href={article.url} target='_blank'>
      <div className='flex items-center justify-between space-x-1 px-4 py-2 transition duration-200 hover:bg-gray-200'>
        <div className='space-y-0.5'>
          <h6 className='text-sm font-bold'>{article.title}</h6>
          <p className='text-xs font-medium text-gray-500'>
            {article.source.name}
          </p>
        </div>
        <div className=''>
          <img
            src={article.urlToImage}
            alt='news caption'
            className='rounded-xl'
            width='100'
          />
        </div>
      </div>
    </a>
  );
}

export default News;
