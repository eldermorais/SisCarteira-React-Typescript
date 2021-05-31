import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;

  h3 {
    position: absolute;
    top: 17px;
    left: 15%;
  }
`;
