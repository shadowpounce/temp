import * as yup from 'yup';

const REQUIRED_MESSAGE = 'This field is required';
const CATEGORIES_MIN_LEN = 'At least one option must be selected';

export const whitelistValidation = yup.object({
  name: yup.string().required(REQUIRED_MESSAGE),
  email: yup.string().required(REQUIRED_MESSAGE).email('Incorrect email address'),
  about: yup.string().required(REQUIRED_MESSAGE),
  categories: yup.array().min(1, CATEGORIES_MIN_LEN),
});
