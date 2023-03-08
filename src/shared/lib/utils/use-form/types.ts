import { OptionalObjectSchema } from 'yup/lib/object';

export type useFormErrors<T> = {
  [P in keyof T]?: string | null | undefined;
};

export type useFormSetFields<T> = {
  [P in keyof T]?: T[P];
};

export type useFormInputType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type useFormSubmitHandler<T> = (
  values: T,
  event: React.FormEvent<HTMLFormElement>,
  extra: {
    getClearData: () => T;
  }
) => void;

export type useFormProps<T> = {
  initialValues: T;
  validateEmptyField?: boolean;
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  validateOnSubmit?: boolean;
  validationSchema?: OptionalObjectSchema<any>;
  clearErrorOnChange?: boolean;
  onSubmit: useFormSubmitHandler<T>;
};
