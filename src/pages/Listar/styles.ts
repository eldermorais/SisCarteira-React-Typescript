import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  width: 100%;
  height: 100%;

  h1 {
    margin: 24px 0;
    text-align: center;
  }
`;

export const ListTable = styled.table`
  width: 700px;
  margin: 24px auto;

  td {
    text-align: left;
    border-bottom: solid 2px #5d5d5d;
    padding: 8px;
  }

  td + td {
    border-left: solid 2px #312e38;
  }

  th {
    font-size: 18px;
    font-weight: 500;
    border-bottom: solid 2px #312e38;
    color: #ff9000;
  }
`;

export const Buttons = styled.div`
  text-align: center;

  button {
    margin-right: auto;
    background: #eea73f;
    width: 40px;
    height: 40px;
    border: 0;
    color: #232129;

    :hover {
      filter: brightness(0.9);
    }
  }

  > button + button {
    background: #dc3545;
    margin-left: 8px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    color: #ff9000;

    padding: 8px;
    height: 50px;
    width: 50px;

    font-size: 18px;

    &:hover {
      background: #f4ede8;
      color: #232129;
    }
  }
`;

export const ContainerSearch = styled.div`
  width: 300px;
  margin: 0 24px 8px;

  button {
    margin-top: 16px;
    background: #ff9000;
    border: 0;
    border-radius: 5px;
    height: 36px;
    width: 70px;

    color: #232129;
    font-weight: 500;

    :hover {
      filter: brightness(0.9);
    }
  }
`;
