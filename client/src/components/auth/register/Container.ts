import styled from 'styled-components';

export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.1) 50%
    ),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.1) 50%
    ),
    url('src/assets/images/cover.jpg');
  background-size: cover;
  position: relative;
`;

export const TopContainer = styled.div`
  width: 100%;
  padding: 21px 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
`;

export const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 25px;

  h1 {
    font-size: 50px;
    font-weight: 900;
  }

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 20px;
  }

  div, form {
    width: 45%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
  }
`;