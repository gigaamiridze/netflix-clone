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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ItemContainer;