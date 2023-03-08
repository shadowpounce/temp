import React, { useEffect, useRef } from 'react';
import clsx, { ClassValue } from 'clsx';
import styles from './input.module.scss';

interface InputProps {
  className?: ClassValue;
  classNameInput?: string;
  classNameField?: string;
  value?: string;
  title?: string;
  error?: string | null | false;
  name?: string;
  controls?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  type?: 'text' | 'password';
  component?: 'input' | 'textarea';
  autoComplete?: 'on' | 'off';
  autoHeight?: boolean;
  required?: boolean;
  componentHead?: React.ReactNode;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  type = 'text',
  error,
  title,
  controls,
  className,
  classNameInput,
  classNameField,
  component: Tag = 'input',
  autoComplete = 'off',
  required,
  name,
  autoHeight,
  placeholder,
  disabled,
  componentHead,
  onBlur,
  onChange,
  onFocus,
}) => {
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (autoHeight && input) {
      input.style.height = '';
      input.style.height = input.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <div className={clsx(styles.input, error && styles.inputError, className)}>
      {(componentHead || title) && (
        <header className={styles.input_head} data-class="head">
          {title && (
            <h3 className={styles.input_title} data-class="title">
              {title}
            </h3>
          )}
          {componentHead}
        </header>
      )}
      <div
        className={clsx(
          styles.input_field,
          value && styles.input_field_filled,
          disabled && styles.input_field_disabled,
          classNameField
        )}
        data-class="field"
      >
        <Tag
          ref={inputRef}
          className={clsx(styles.input_input, classNameInput)}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          disabled={disabled}
          type={type}
          data-class="input"
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
        />
        {controls && (
          <div className={styles.input_controls}>
            <span className={styles.input_controls_separator}></span>
            {controls}
          </div>
        )}
      </div>
      {error && <p className={styles.input_error}>{error}</p>}
    </div>
  );
};

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default Input;
