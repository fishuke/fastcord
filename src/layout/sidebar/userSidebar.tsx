
const UserSidebar = () => {
  return (
    <div className='bg-background-secondary w-56 flex-none px-3 py-3 overflow-y-auto'>
      <h3 className='uppercase tracking-wide font-semibold text-xs text-gray-500 mb-2'>
        stalk team
      </h3>
      <ul className='mb-6'>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2 flex items-center'>
          <button className='flex'>
            <span>
              <button>
                <img
                  className='w-8 h-8 rounded-full'
                  src='data:image/jpeg;base64,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'
                  alt='avatar'
                />
              </button>
            </span>
            <span className='ml-2 text-indigo-500'>lastcode</span>
          </button>
        </li>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2 flex items-center'>
          <button className='flex'>
            <span>
              <button>
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://avatars.githubusercontent.com/u/66701659?v=4'
                  alt='avatar'
                />
              </button>
            </span>
            <span className='ml-2 text-indigo-500'>fishuke</span>
          </button>
        </li>
      </ul>
      <h3 className='uppercase tracking-wide font-semibold text-xs text-gray-500 mb-2'>
        Online — 243
      </h3>
      <ul className='m-6'>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2'>
          <button className='flex items-center'>
            <button className='items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/66701659?v=4'
                alt='avatar'
              />
            </button>
            <span className='m-2'>fishuke</span>
          </button>
        </li>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2'>
          <button className='flex items-center'>
            <button className='items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/66701659?v=4'
                alt='avatar'
              />
            </button>
            <span className='m-2'>fishuke</span>
          </button>
        </li>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2'>
          <button className='flex items-center'>
            <button className='items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/66701659?v=4'
                alt='avatar'
              />
            </button>
            <span className='m-2'>fishuke</span>
          </button>
        </li>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2'>
          <button className='flex items-center'>
            <button className='items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/66701659?v=4'
                alt='avatar'
              />
            </button>
            <span className='m-2'>fishuke</span>
          </button>
        </li>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2'>
          <button className='flex items-center'>
            <button className='items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/66701659?v=4'
                alt='avatar'
              />
            </button>
            <span className='m-2'>fishuke</span>
          </button>
        </li>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2'>
          <button className='flex items-center'>
            <button className='items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/66701659?v=4'
                alt='avatar'
              />
            </button>
            <span className='m-2'>fishuke</span>
          </button>
        </li>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2'>
          <button className='flex items-center'>
            <button className='items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/66701659?v=4'
                alt='avatar'
              />
            </button>
            <span className='m-2'>fishuke</span>
          </button>
        </li>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2'>
          <button className='flex items-center'>
            <button className='items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/66701659?v=4'
                alt='avatar'
              />
            </button>
            <span className='m-2'>fishuke</span>
          </button>
        </li>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2'>
          <button className='flex items-center'>
            <button className='items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/66701659?v=4'
                alt='avatar'
              />
            </button>
            <span className='m-2'>fishuke</span>
          </button>
        </li>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2'>
          <button className='flex items-center'>
            <button className='items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/66701659?v=4'
                alt='avatar'
              />
            </button>
            <span className='m-2'>fishuke</span>
          </button>
        </li>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2'>
          <button className='flex items-center'>
            <button className='items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/66701659?v=4'
                alt='avatar'
              />
            </button>
            <span className='m-2'>fishuke</span>
          </button>
        </li>
        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2'>
          <button className='flex items-center'>
            <button className='items-center'>
              <img
                className='w-8 h-8 rounded-full'
                src='https://avatars.githubusercontent.com/u/66701659?v=4'
                alt='avatar'
              />
            </button>
            <span className='m-2'>fishuke</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
