import styled from 'styled-components';

export const Container = styled.button`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 62, 121, 1) 42%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #f4ede8;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
