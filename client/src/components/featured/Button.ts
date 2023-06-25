import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 7px;
  cursor: pointer;

  svg {
    font-size: 20px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const PlayButton = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.main};
  `}
`;

export const InfoButton = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.white};
  `}
`;