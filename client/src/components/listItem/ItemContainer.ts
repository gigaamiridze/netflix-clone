import styled, { css } from 'styled-components';

const ItemContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.main};
  `}
  width: 225px;
  height: 120px;
  overflow: hidden;
  cursor: pointer;
`;

export default ItemContainer;