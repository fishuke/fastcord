const FriendsArea = () => {
    return (
        <div className='w-56 flex-none flex flex-col justify-between p-[1rem]'>
        <div className='text-sm overflow-y-auto'>
          <ul className='px-2 py-3'>
            <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
              <a href='#' className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>welcome</span>
              </a>
            </li>
            <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
              <a href='#' className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>faq</span>
              </a>
            </li>
          </ul>
          <button className='flex items-center text-gray-500 hover:text-gray-200'>

            <h3 className='uppercase tracking-wide font-semibold text-xs'>
              hello chat
            </h3>
          </button>
          <ul className='px-2 py-3 pt-2'>
            <li className='text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900 bg-gray-750 rounded'>
              <a href='#' className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>welcome</span>
              </a>
            </li>
            <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
              <a href='#' className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>cor-dev</span>
              </a>
            </li>
            <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
              <a href='#' className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>course</span>
              </a>
            </li>
            <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
              <a href='#' className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>showcase</span>
              </a>
            </li>
            <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
              <a href='#' className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>help</span>
              </a>
            </li>
          </ul>
          <button className='flex items-center text-gray-500 hover:text-gray-200'>

            <h3 className='uppercase tracking-wide font-semibold text-xs'>
              Community
            </h3>
          </button>
          <ul className='px-2 py-3 pt-2'>
            <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
              <a href='#' className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>feedback</span>
              </a>
            </li>
            <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
              <a href='#' className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>jobs</span>
              </a>
            </li>
          </ul>
          <button className='flex items-center text-gray-500 hover:text-gray-200'>

            <h3 className='uppercase tracking-wide font-semibold text-xs'>
              Off Topic
            </h3>
          </button>
          <ul className='px-2 py-3 pt-2'>
            <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
              <a href='#' className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>design</span>
              </a>
            </li>
            <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
              <a href='#' className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>development</span>
              </a>
            </li>
            <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
              <a href='#' className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>random</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
}
export default FriendsArea;
