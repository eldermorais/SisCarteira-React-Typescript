import styled, { css } from 'styled-components';

interface BtnProps {
  isSelect?: boolean;
}

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  width: 100%;
  height: 100%;
  position: relative;

  h1 {
    margin: 32px 0;
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

  @media (max-width: 768px) {
    width: 100%;
    td {
      font-size: 12px;
    }
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
  button:nth-child(3) {
    background-color: #232129;
    color: #f4ede8;
  }

  > button + button {
    background: #dc3545;
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    > button + button {
      margin-left: 0px;
      margin-top: 4px;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerSearch = styled.div`
  width: 100%;
  margin: 0 24px 8px;

  form {
    width: 300px;

    button {
      margin-top: 16px;
      background: rgb(2, 0, 36);
      background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 62, 121, 1) 50%,
        rgba(0, 212, 255, 1) 100%
      );
      border: 0;
      border-radius: 5px;
      height: 36px;
      width: 70px;

      color: #f4ede8;
      font-weight: 500;
      transition: filter 0.2s;

      :hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    td {
      font-size: 12px;
    }
  }
`;

export const PaginationItem = styled.div<BtnProps>`
  color: #ff9000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  padding: 8px;
  height: 50px;
  width: 50px;

  font-size: 18px;

  border-radius: 5px;
  transition: all 0.2s;

  &:hover {
    background: #f4ede8;
    color: #232129;
  }

  ${(props) =>
    props.isSelect &&
    css`
      background: #f4ede8;
      color: #232129;
    `}
`;

export const PaginationArrows = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
`;
