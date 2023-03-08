import { useCallback, useMemo, useState } from 'react';
import * as yup from 'yup';
import { useFormErrors, useFormInputType, useFormProps, useFormSetFields } from './types';

function useForm<T extends object>(props: useFormProps<T>) {
  const [errors, setErrors] = useState<useFormErrors<T>>({});
  const [values, setValues] = useState<T>(props.initialValues);
  const [submitted, setSubmitted] = useState(false);

  const initialFormData = useMemo(() => {
    return JSON.stringify(props.initialValues);
  }, [props.initialValues]);

  const getClearData = useCallback(() => {
    return Object.entries(values).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: typeof value === 'string' ? value.trim() : value,
      };
    }, {} as T);
  }, [values]);

  const canSubmit = useMemo(() => {
    return Object.values(getClearData()).every((val) =>
      typeof val === 'string' ? val.length > 0 : true
    );
  }, [values]);

  const setFieldValue = function <P extends keyof T>(field: P, value: T[P]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setSubmitted(false);
  };

  const setFieldError = function <P extends keyof T>(field: P, error: string | null | undefined) {
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const setFields = function ($values: useFormSetFields<T>) {
    setValues((prev) => ({ ...prev, ...$values }));
  };

  const handleChange = (ev: useFormInputType) => {
    let name = ev.target.name;
    let value = ev.target.value;

    if (name in values) {
      setValues((prev) => ({ ...prev, [name]: value }));
      setSubmitted(false);

      if (props.validateOnChange) {
        validate();
      }

      if (props.clearErrorOnChange && errors[name as keyof T]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleBlur = (ev: useFormInputType) => {
    if (props.validateOnBlur) {
      validate();
    }
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setSubmitted(true);
    if ((props.validateOnSubmit && validate(true)) || !props.validateOnSubmit) {
      props.onSubmit(values, ev, {
        getClearData,
      });
    }
  };

  const validate = useCallback(
    (isAllFields: boolean = false) => {
      let hasErrors = false;

      if (!props.validationSchema) {
        return;
      }

      const validationErrors = props.clearErrorOnChange ? { ...errors } : ({} as useFormErrors<T>);
      const isValidateAll = isAllFields || !!props.validateEmptyField;

      try {
        props.validationSchema.validateSync(values, { abortEarly: false });
      } catch (err) {
        let typeErr = err as yup.ValidationError;
        typeErr.inner.forEach(({ path, message, value }) => {
          if (isValidateAll || value !== '') {
            validationErrors[path as keyof typeof validationErrors] = message;
            hasErrors = true;
          }
        });
      } finally {
        setErrors(validationErrors);
      }

      return !hasErrors;
    },
    [values, errors, props.validationSchema, props.validateEmptyField]
  );

  const reset = () => {
    setFields(JSON.parse(initialFormData));
  };

  return {
    errors,
    values,
    submitted,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    setFields,
    getClearData,
    canSubmit,
  };
}

export default useForm;
