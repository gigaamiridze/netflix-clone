import styled, { css } from 'styled-components';
import { IAuthContainerProps } from '../../interfaces';

export const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 5%,
      rgba(0, 0, 0, 0.1) 50%
    ),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.9) 5%,
      rgba(0, 0, 0, 0.1) 50%
    ),
    url('src/assets/images/cover.jpg');
  background-size: cover;
  position: relative;
`;

export const TopContainer = styled.div<IAuthContainerProps>`
  ${({ isRegisterContent }) => css`
    padding: 21px ${isRegisterContent ? '170px' : '40px'};
  `}
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
`;

const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterCenterContainer = styled(CenterContainer)`
  flex-direction: column;
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

export const LoginCenterContainer = styled(CenterContainer)`
  form {
    background-color: rgba(0, 0, 0, .75);
    padding: 60px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 32px;
      font-weight: 500;
    }
  }
`;