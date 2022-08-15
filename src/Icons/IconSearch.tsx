import React from 'react';

const IconSearch = () => {
  return (
    <a
      href='#'
      className='w-12 h-12 bg-gray-800 hover:bg-teal-500 text-teal-500 hover:text-white inline-block rounded-full'
    >
      <svg
        fill='currentColor'
        className='mt-3 mx-auto'
        viewBox='0 0 24 24'
        width='24'
        height='24'
      >
        <path
          className='heroicon-ui'
          d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'
        ></path>
      </svg>
    </a>
  );
};

export default IconSearch;
