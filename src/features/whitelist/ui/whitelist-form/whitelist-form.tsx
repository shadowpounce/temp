import React from 'react';
import clsx from 'clsx';
import { useWhitelist } from 'features/whitelist/lib/hooks';
import { getDefaultHobbyList } from 'features/whitelist/lib/utils';
import { whitelistValidation } from 'features/whitelist/lib/validation/whitelist.validation';
import { useForm } from 'shared/lib/utils/use-form';
import Button from 'shared/ui/button/button';
import Input from 'shared/ui/input/input';
import styles from './whitelist-form.module.scss';

interface WhitelistFormProps {}

interface Inputs {
  name: string;
  email: string;
  about: string;
  categories: string[];
}

const initialHobbies = getDefaultHobbyList();

const WhitelistForm: React.FC<WhitelistFormProps> = () => {
  const { setStage } = useWhitelist();
  const { values, errors, handleChange, handleSubmit, setFieldValue } = useForm<Inputs>({
    initialValues: {
      name: '',
      email: '',
      about: '',
      categories: [],
    },
    validateOnSubmit: true,
    validationSchema: whitelistValidation,
    onSubmit(values, event, { getClearData }) {
      // API

      //
      setStage('verify');
      return;
    },
  });

  const handleCategory = (name: string) => {
    let categories = [...values.categories];
    if (categories.includes(name)) {
      categories = categories.filter((category) => category !== name);
    } else {
      categories.push(name);
    }
    setFieldValue('categories', categories);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_row}>
        <div className={styles.form_col}>
          <Input
            name="name"
            value={values.name}
            onChange={handleChange}
            className={styles.form_input}
            placeholder="Your name"
          />
        </div>
        <div className={styles.form_col}>
          <Input
            name="email"
            value={values.email}
            onChange={handleChange}
            className={styles.form_input}
            placeholder="Your Email"
          />
        </div>
      </div>

      <Input
        name="about"
        component="textarea"
        onChange={handleChange}
        className={styles.form_textarea}
        placeholder="Tell us about your business and how we can aid you"
        autoHeight
      />

      <h3 className={styles.form_subtitle}>What product categories are you interested in?</h3>

      <ul className={styles.form_hobby_list}>
        {initialHobbies.map((hobby) => (
          <li
            className={styles.form_hobby_item}
            data-active={values.categories.includes(hobby)}
            key={hobby}
            onClick={() => handleCategory(hobby)}
          >
            {hobby}
          </li>
        ))}
      </ul>

      <p className={styles.form_inform}>
        <i>List of products from selected categories will be mailed to you</i>
      </p>

      <Button className={styles.form_submit} text="Continue" type="submit" />
    </form>
  );
};

export default WhitelistForm;
