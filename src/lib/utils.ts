import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { EASY, HARD, MEDIUM } from '@/constants/contants';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buildPasswordValidation = (
  settings: {
    text: string;
    value: boolean;
    id: number;
  }[],
) => {
  let regex = '^';
  const message = [];

  if (settings.find((s) => s.id === 1 && s.value)) {
    regex += '(?=.*[A-Z])';
    message.push('one uppercase letter');
  }
  if (settings.find((s) => s.id === 2 && s.value)) {
    regex += '(?=.*[a-z])';
    message.push('one lowercase letter');
  }
  if (settings.find((s) => s.id === 3 && s.value)) {
    regex += '(?=.*[0-9])';
    message.push('one digit');
  }
  if (settings.find((s) => s.id === 4 && s.value)) {
    regex += '(?=.*[!@#$%^&*])';
    message.push('one special character');
  }
  if (settings.find((s) => s.id === 5 && s.value)) {
    regex += '(?=.{8,})';
    message.push('at least 8 characters');
  }

  return {
    regex: new RegExp(regex),
    message: 'Password must contain at least ' + message.join(', '),
  };
};

// check strength of password
export const passwordStrengthIndicator = (password: string) => {
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{1,9}$/.test(password)) {
    return MEDIUM;
  } else if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{10,}$/.test(password)
  ) {
    return HARD;
  } else {
    return EASY;
  }
};
