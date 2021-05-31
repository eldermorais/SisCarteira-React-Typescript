import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  min-height: calc(100vh - 60px);
  width: 100%;
  height: 100%;
  background-color: #ffffffb8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 200px;
  width: 300px;
  background: #fff;
  border-radius: 1rem;

  strong {
    color: #312e38;
    font-size: 16px;
  }

  > div {
    display: flex;
    align-items: center;
    padding: 16px;
    /* position: absolute; */

    svg {
      color: red;
      margin-right: 16px;
    }
    h3 {
      color: #312e38;
      font-weight: 500;
    }
    & > button {
      position: relative;
      left: 150px;
      border: 0;
      background: transparent;
      bottom: 4px;
      svg {
        margin: 0;
      }
    }
  }
`;

export const Confirmation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 24px;

    button {
      font-weight: 500;
      color: #fff;
      border: 0;
      border-radius: 5px;
      height: 36px;
      width: 80px;
    }

    button + button {
      background: #dc3545;
      margin-left: 8px;
    }

    > button {
      background: #2aa22a;
    }
  }
`;
