import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  background: #28262e;
  flex: 1;
  align-items: center;

  h1 {
    margin: 32px 0;
    text-align: center;
  }
`;

export const Graphics = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AdditionalData = styled.div`
  width: 100%;
  text-align: center;
  color: #5d5d5d;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;
