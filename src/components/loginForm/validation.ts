import * as Yup from 'yup';

import * as CONSTANTS from '@/constants/contants';

export const validationSchema = Yup.object({
  [CONSTANTS.PASSWORD]: Yup.string().required('This field is required'),
  [CONSTANTS.EMAIL]: Yup.string().required('This field is required'),
});

export const initialValues = {
  [CONSTANTS.EMAIL]: '',
  [CONSTANTS.PASSWORD]: '',
};
