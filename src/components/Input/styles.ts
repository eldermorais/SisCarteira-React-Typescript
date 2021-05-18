import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  color: #666360;
  border: 2px solid #232129;
  margin-top: 8px;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border: 2px solid #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

    ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}
    div {
    position: relative;
  }
  div:hover span {
    opacity: 1;
    visibility: visible;
  }
  span {
    background: #c53030;
    padding: 8px;
    border-radius: 4px;
    width: 170px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    color: #f4ede8;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  input,
  select {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    margin-left: 16px;

    /* Cor de fundo do autocomplete */
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #232129 inset;
      box-shadow: 0 0 0px 1000px #232129 inset;
      -webkit-text-fill-color: #f4ede8 !important;
      border-radius: 0;
      transition: background-color 5000s ease-in-out 0s;
    }

    &::placeholder {
      color: #666360;
    }
  }

  input :invalid {
    border-color: red;
  }
  svg {
    margin-right: 0px;
  }
`;
export const ErrorInput = styled.div`
  position: relative;
`;
