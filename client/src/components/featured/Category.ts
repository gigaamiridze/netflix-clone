import styled, { css } from 'styled-components';

const Category = styled.div`
  position: absolute;
  top: 80px;
  left: 50px;
  display: flex;
  align-items: center;
  column-gap: 15px;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 28px;
    font-weight: 500;
  }

  select {
    ${({ theme }) => css`
      background-color: ${theme.colors.main};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
      font-family: ${theme.fonts.primary};
    `}
    font-size: 13.5px;
    border-radius: 6px;
    padding: 5px;
    outline: none;
    cursor: pointer;
  }
`;

export default Category;