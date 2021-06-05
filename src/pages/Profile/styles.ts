import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  justify-content: center;

  h3 {
    width: 100%;
    margin: 20px 0;
    border-bottom: solid 1px #666360;
  }

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

export const FormGroup1 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    label {
      width: 100%;
      margin: 0;
    }
    input {
      display: block;
      width: 100%;
    }
  }
`;

export const FormGroup3 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
