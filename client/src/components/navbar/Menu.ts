import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 45px;
    }
  }
`;

export const Options = styled.div`
  display: none;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 6px;

  span {
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
  }
`;