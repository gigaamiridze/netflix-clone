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
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;