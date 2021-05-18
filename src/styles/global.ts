import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312E38;
    color: #fff;
    -webkit-font-smooting: antialiased;
    width: 100%;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size:16px;
  }
  h1, h2, h3, h4, h5, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: #28262e;
`;

export const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
`;
