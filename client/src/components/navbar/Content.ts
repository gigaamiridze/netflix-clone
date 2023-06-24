import styled from 'styled-components';

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;

export const RightContent = styled(LeftContent)`
  column-gap: 15px;

  svg {
    font-size: 20px;
    cursor: pointer;
  }

  span {
    font-size: 14px;
  }
`;