import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    margin: 32px 0 32px 0;
  }

  label {
    color: #f4ede8;
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
      margin-top: 32px;
    }
  }
`;

export const FormGroup1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 16px;
  margin-bottom: 16px;
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
`;

export const FormGroup3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 16px;
  margin-bottom: 16px;

  input {
    width: 100%;
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
`;