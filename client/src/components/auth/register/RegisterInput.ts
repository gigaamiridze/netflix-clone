import styled, { css } from 'styled-components';

const RegisterInput = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.transparentBlack};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.transparentGray};
    font-family: ${theme.fonts.primary};
  `}
  width: 65%;
  height: 100%;
  border-radius: 4px;
  padding: 0 16px;
  outline: none;
  font-size: 17px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export default RegisterInput;