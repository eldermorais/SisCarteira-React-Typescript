import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #28262e;
`;

export const Header = styled.header`
  padding: 8px 16px;
  background: #312e38;
  height: 60;
  border-bottom: 4px solid #28262e;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
`;

export const SideBar = styled.nav`
  background: #312e38;
  max-width: 300px;
  flex: 1;
  padding: 8px 8px;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 16px;
    border-radius: 5px;
    height: 60px;
    color: #f4ede8;
    text-decoration: none;

    font-size: 20px;
    font-weight: 500;
    margin-bottom: 8px;
    transition: background 0.5s;

    &:hover {
      background: #3d3946d9;
    }

    svg {
      margin-right: 8px;
    }
  }
`;
