'use client';

import { useFormik } from 'formik';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

import {
  buildPasswordValidation,
  passwordStrengthIndicator,
} from '@/lib/utils';

import Button from '@/components/buttons/Button';
import { Input } from '@/components/shared/input';
import StrengthIndicator from '@/components/strengthIndicator/StrengthIndicator';

import { useAppSelector } from '@/store';

import * as CONSTANTS from '@/constants/contants';

const LoginForm = () => {
  const settings = useAppSelector((state) => state.settings);

  const [passwordValidation, setPasswordValidation] = useState({
    regex: /.*/,
    message: '',
  });

  useEffect(() => {
    setPasswordValidation(buildPasswordValidation(settings.settings));
  }, [settings]);

  const validationSchema = Yup.object({
    [CONSTANTS.EMAIL]: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    [CONSTANTS.PASSWORD]: Yup.string()
      .required('Password is required')
      .matches(passwordValidation.regex, passwordValidation.message),
  });

  const formik = useFormik({
    initialValues: {
      [CONSTANTS.EMAIL]: '',
      [CONSTANTS.PASSWORD]: '',
    },
    validationSchema,
    onSubmit: () => {
      toast.success('Form submitted successfully');
    },
  });

  function getFormikPropsInput(id: keyof typeof formik.values) {
    return {
      ...formik.getFieldProps(id),
      ...formik.getFieldMeta(id),
    };
  }

  // Function to check if all values are false
  const areAllValuesFalse = settings.settings.every(
    (setting) => setting.value === false,
  );

  return (
    <div className='mx-auto mt-20 md:max-w-[560px] bg-white rounded-[6px] p-[40px]'>
      <div className='relative w-[64px] h-[64px]'>
        <Image src='svg/profile.svg' alt='logo' fill />
      </div>
      <div className='mt-10'>
        <p className='text-lg font-bold'>Registration Form</p>
        <form onSubmit={formik.handleSubmit} className='mt-10'>
          <Input
            disabled={areAllValuesFalse}
            id={CONSTANTS.EMAIL}
            type='email'
            {...getFormikPropsInput(CONSTANTS.EMAIL)}
            label='Enter Email Address'
            placeholder='Ex. mypaddy@gmail.com'
          />
          <div className='mt-6'>
            <Input
              disabled={areAllValuesFalse}
              id={CONSTANTS.PASSWORD}
              type='password'
              {...getFormikPropsInput(CONSTANTS.PASSWORD)}
              label='Enter Password'
              placeholder='Enter Password'
            />
            <StrengthIndicator
              strength={passwordStrengthIndicator(formik.values.password)}
            />
          </div>
          <Button
            disabled={areAllValuesFalse}
            className='w-full border-none mt-14'
            type='submit'
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
