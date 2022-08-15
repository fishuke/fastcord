import PlusCircle from '../../../Icons/PlusCircle';
import IconGift from '../../../Icons/IconGift';
import IconGIF from '../../../Icons/IconGIF';
import IconSmiley from '../../../Icons/IconSmiley';

const ChatInput = () => {
  return (
    <div className='bg-gray-750 h-24 flex items-center mx-3 border-t border-gray-600'>
      <button className='px-2 h-10 bg-[#41434a] rounded-l text-gray-500 hover:text-white'>
        <PlusCircle />
      </button>
      <div className='flex-1'>
        <input
          type='text'
          className='w-full text-sm h-10 px-2 py-2 bg-[#41434a] text-gray-200 focus:outline-none rounded'
        />
      </div>
      <div className='px-2 py-2 bg-[#41434a] rounded-r flex items-center h-10'>
        <button className='h-10 bg-[#41434a] rounded-l text-gray-500 hover:text-white'>
          <IconGift />
        </button>
        <button className='h-10 bg-[#41434a] rounded-l text-gray-500 hover:text-white ml-3'>
          <IconGIF />
        </button>
        <button className='h-10 bg-[#41434a] rounded-l text-gray-500 hover:text-white ml-3'>
          <IconSmiley />
        </button>
      </div>
    </div>
  )
}
export default ChatInput;
