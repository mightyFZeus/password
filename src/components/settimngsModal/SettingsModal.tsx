'use client';

import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/buttons/Button';

import { useAppDispatch, useAppSelector } from '@/store';

import { setValue } from '@/slices/settingsSlice';

const SettingsModal = ({ toggleModal }: { toggleModal: () => void }) => {
  const { settings } = useAppSelector((state) => state.settings);
  const areAllValuesFalse = settings.every(
    (setting) => setting.value === false,
  );

  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    if (areAllValuesFalse) {
      toast.error('Please Select one or all option(s)');
    } else {
      toggleModal();
    }
  };
  return (
    <div className='    mx-auto mt-20  bg-white rounded-[6px]  p-[40px]'>
      <div className='relative w-[64px] h-[64px]'>
        <Image src='svg/settings.svg' alt='logo' fill />
      </div>
      <div className='mt-6'>
        <p className='text-lg font-semibold '>
          Criteria for the password input
        </p>
        <div className='mt-6'>
          {settings?.map((item, index) => (
            <div key={index} className='flex flex-row gap-4 items-center mb-2'>
              <input
                className='cursor-pointer'
                type='checkbox'
                checked={item.value}
                onClick={() =>
                  dispatch(setValue({ ide: item.id, value: item.value }))
                }
              />
              <p className='font-jarkata'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row mt-6 gap-6'>
        <Button
          onClick={handleCloseModal}
          className=' hover:bg-[#f5f5f5] active:bg-[#f5f5f5] bg-[#f5f5f5] outline-none border-0 text-black md:w-[209px]'
        >
          Close
        </Button>
        <Button onClick={handleCloseModal} className=' md:w-[209px]'>
          Save
        </Button>
      </div>
    </div>
  );
};

export default SettingsModal;
