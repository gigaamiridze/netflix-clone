import styled from 'styled-components';

const Info = styled.div`
  width: 35%;
  position: absolute;
  left: 50px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
 
  img {
    width: 400px;
  }

  p {
    line-height: 20px;
  }
`;

export default Info;