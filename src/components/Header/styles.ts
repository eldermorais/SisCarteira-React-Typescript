import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px 16px;
  background: #312e38;
  height: 60px;
  border-bottom: 4px solid #28262e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 2;

  & div {
    display: flex;
    align-items: center;

    img {
      width: 48px;
      margin-right: 8px;
    }
  }
  & div + div {
    a {
      color: #f4ede8;
      text-decoration: none;
      transition: filter 0.5s;

      &:hover {
        filter: brightness(0.8);
      }
    }

    button {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      color: #f4ede8;
      margin-left: 16px;
      transition: filter 0.5s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  @media (max-width: 768px) {
    & div + div {
      a span {
        display: none;
      }
    }
  }
`;
