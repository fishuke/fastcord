import React from 'react';

const IconDownload = () => {
  return (
    <a
      href='#'
      className='w-12 h-12 bg-gray-800 hover:bg-teal-500 text-teal-500 hover:text-white inline-block rounded-full'
    >
      <svg
        fill='currentColor'
        className='mt-3 mx-auto'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
      >
        <path
          className='heroicon-ui'
          d='M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z'
        ></path>
      </svg>
    </a>
  );
};

export default IconDownload;
