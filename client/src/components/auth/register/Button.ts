import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    transition: ${theme.transition};
  `}
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkRed};
  }
`;

export const SignInButton = styled(Button)`
  padding: 7px 15px;
  font-size: 15px;
  font-weight: 500;
`;