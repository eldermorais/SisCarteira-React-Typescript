import styled from 'styled-components';

export const Container = styled.div`
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 204px;
  height: 325px;

  h1 {
    margin: 0.6rem 0;
    text-align: center;
    font-size: 0.9rem;
  }
`;

export const HeaderCard = styled.div`
  color: black;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
  h1 {
    font-size: 0.9rem;
  }
`;

export const FotoCard = styled.div`
  width: 100%;
  display: flex;
  img {
    width: 70px;
    height: 100px;
    margin: 0 auto 20px auto;
  }
`;

export const Informations = styled.div`
  height: 100%;
  font-size: 0.8rem;
  font-weight: 500;

  div {
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;
