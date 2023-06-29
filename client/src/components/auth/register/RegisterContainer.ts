import styled from 'styled-components';

const RegisterContainer = styled.div`
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

export default RegisterContainer;