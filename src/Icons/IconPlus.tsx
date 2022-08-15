import React from 'react';

const IconPlus = props => {
  return (
    <>
      <a
        href='#'
        className='w-12 h-12 bg-gray-800 hover:bg-teal-500 text-teal-500 hover:text-white inline-block rounded-full'
      >
        <svg
          fill='currentColor'
          className='mt-3 mx-auto'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <line x1='12' y1='5' x2='12' y2='19'></line>
          <line x1='5' y1='12' x2='19' y2='12'></line>
        </svg>
      </a>
    </>
  );
};

export default IconPlus;
