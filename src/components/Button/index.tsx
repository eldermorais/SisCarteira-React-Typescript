import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  children: ReactNode;
};

function Button({ children, loading, ...rest }: ButtonProps) {
  return (
    <Container type="button" {...rest}>
      {loading ? 'Aguarde...' : children}
    </Container>
  );
}

export default Button;
