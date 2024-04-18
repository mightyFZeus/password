'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Button from '@/components/buttons/Button';
import GenModal from '@/components/genModal/GenModal';
import SettingsModal from '@/components/settimngsModal/SettingsModal';

import { useAppSelector } from '@/store';

const NavBar = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const { settings } = useAppSelector((state) => state.settings);

  // Function to check if all values are false
  const areAllValuesFalse = settings.every(
    (setting) => setting.value === false,
  );

  useEffect(() => {
    if (areAllValuesFalse) {
      setModal(true);
    }
  }, [areAllValuesFalse]);

  return (
    <div className='flex flex-row justify-between items-center px-6 md:px-20 py-6  bg-white'>
      <div className='relative w-[185px] h-[45px]'>
        <Image src='svg/Logo.svg' alt='logo' fill />
      </div>
      <Button
        className='w-[138px] h-[54px] rounded-[12px]'
        onClick={toggleModal}
      >
        Settings
      </Button>
      <GenModal hideCloseIcon isOpen={modal} handleCloseModal={toggleModal}>
        <SettingsModal toggleModal={toggleModal} />
      </GenModal>
    </div>
  );
};

export default NavBar;
