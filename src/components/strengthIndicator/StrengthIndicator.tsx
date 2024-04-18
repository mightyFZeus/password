import React from 'react';

import { EASY, HARD, MEDIUM } from '@/constants/contants';

const StrengthIndicator = ({ strength }: { strength: string }) => {
  return (
    <div className=' flex flex-col md:flex-row justify-between md:items-center mt-2'>
      <p className='text-xs'>
        {' '}
        {strength === HARD ? '🥳' : strength === MEDIUM ? '😏' : '🥲'}{' '}
        {strength}
      </p>
      <div className='mt-2 md:mt-0'>
        {strength === EASY && (
          <div className='flex flex-row gap-2'>
            <div className='bg-[#DB4D4D]  h-1 w-[50px] rounded-[2px]' />
            <div className='bg-[#f5f5f5]  h-1 w-[70px] rounded-[2px]' />
            <div className='bg-[#f5f5f5]  h-1 w-[100px] rounded-[2px]' />
          </div>
        )}
        {strength === MEDIUM && (
          <div className='flex flex-row gap-2'>
            <div className='bg-[#DB4D4D]  h-1 w-[50px] rounded-[2px]' />
            <div className='bg-[#FFA500]  h-1 w-[70px] rounded-[2px]' />
            <div className='bg-[#f5f5f5]  h-1 w-[100px] rounded-[2px]' />
          </div>
        )}
        {strength === HARD && (
          <div className='flex flex-row gap-2'>
            <div className='bg-[#DB4D4D]  h-1 w-[50px] rounded-[2px]' />
            <div className='bg-[#FFA500]  h-1 w-[70px] rounded-[2px]' />
            <div className='bg-[#008000]  h-1 w-[100px] rounded-[2px]' />
          </div>
        )}
      </div>
    </div>
  );
};

export default StrengthIndicator;
