import styled from 'styled-components';

const Back = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  padding: 5px;
  cursor: pointer;

  svg {
    font-size: 22px;
  }
`;

export default Back;