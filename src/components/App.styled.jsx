import styled from '@emotion/styled';

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 50px;
  background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
`;

export const Title = styled.h1`
  font-family: 'Oxygen', sans-serif;
  color: #f5f5f5;
  font-size: 35px;
  text-transform: uppercase;
`;

export const SecondTitle = styled.h2`
  font-family: 'Oxygen', sans-serif;
  color: #f5f5f5;
  font-size: 30px;
`;
