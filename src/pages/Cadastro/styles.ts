import styled, { keyframes } from 'styled-components';

const appearFronTop = keyframes`
  from{
    opacity: 0;
    transform: translateY(-50px);
    height: 0;
  }
  to{
    opacity: 1;
    transform: translateY(0);
    height: 100px;
  }
`;

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    margin: 32px 0 32px 0;
  }

  label {
    color: #666360;
    margin-left: 24px;
  }

  Form {
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 16px;

    button {
      width: 250px;
      margin: 32px 0;
    }
  }

  @media (max-width: 768px) {
    form {
      width: 90%;
    }
  }
`;

export const FotoContainer = styled.div`
  margin: 25px 0;
  width: 75px;
  height: 100px;
  background: grey;
  position: relative;

  animation: ${appearFronTop} 1s;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 65px;
    left: 45px;
    margin: 0;
    width: 50px;
    height: 50px;
    background: rgba(9, 62, 121, 1);

    border-radius: 50%;

    cursor: pointer;

    svg {
      margin: auto;
      color: rgba(0, 212, 255, 1);
    }
    input {
      display: none;
    }
  }
`;

export const FormGroup1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;

export const FormGroup2 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 16px;
  margin-bottom: 16px;

  select {
    font-size: 16px;
    color: #f4ede8;
    font-weight: 500;

    option {
      background: #232129;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    select {
      width: 100%;
    }
  }
`;

export const FormGroup3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 16px;
  margin-bottom: 16px;

  input {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;

export const FormGroup4 = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 16px;
  margin-bottom: 16px;

  input {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;
