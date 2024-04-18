// INPUT TYPES START
export type InputPasswordType = 'password';
export type InputTextType = 'text';
export type InputEmailType = 'email';
export type InputDateType = 'date';
export type InputFileType = 'file';
export type InputSelectType = 'select';
// INPUT TYPES END

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  touched?: boolean;
  error?: string;
  labelClassName?: string;
  label?: string;
  id: string;
  type: InputPasswordType | InputTextType | InputEmailType | InputDateType;
  inputClassName?: string;
  containerClassName?: string;
  initialValue?: string;
  initialTouched?: boolean;
  initialError?: string;
}
