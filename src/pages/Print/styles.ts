import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: #fff;

  button {
    border: 0;
    border-radius: 5px;
    width: 90px;
    height: 50px;
    color: #f4ede8;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 62, 121, 1) 50%,
      rgba(0, 212, 255, 1) 100%
    );

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
