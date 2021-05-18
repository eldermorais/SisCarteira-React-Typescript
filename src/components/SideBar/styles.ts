import styled from 'styled-components';

export const Container = styled.div`
  background: #312e38;
  min-width: 250px;
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
