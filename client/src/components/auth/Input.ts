import styled, { css } from 'styled-components';

const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
  `}
  border-radius: 4px;
  padding: 0 16px;
  font-size: 17px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const RegisterInput = styled(Input)`
  ${({ theme }) => css`
    background-color: ${theme.colors.transparentBlack};
    border: 1px solid ${theme.colors.transparentGray};
  `}
  width: 65%;
  height: 100%;
`;

export const LoginInput = styled(Input)`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkGray};
    transition: ${theme.transition};
  `}
  width: 100%;
  height: 50px;
  border: none;

  &:last-child {
    margin: 16px 0 40px;
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.darkLiver};
  }
`;