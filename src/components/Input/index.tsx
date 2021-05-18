import React, {
  InputHTMLAttributes,
  useState,
  useRef,
  useCallback,
} from 'react';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';
import { ErrorMessage, Field, useField } from 'formik';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  as?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

function Input(props: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  useField(props);

  const { icon, ...rest } = props;
  const Icon = icon;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);
  const inputError = !!inputRef.current?.nextSibling;
  return (
    <>
      <Container
        isErrored={inputError}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        {Icon && <Icon size={20} />}
        <Field
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
          innerRef={inputRef}
        />

        <ErrorMessage
          name={props.name}
          render={(msg) => (
            <div>
              {<FiAlertCircle />} <span>{msg}</span>
            </div>
          )}
        />
      </Container>
    </>
  );
}

export default Input;
