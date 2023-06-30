import styled, { css } from 'styled-components';
import { ILogoProps } from '../../interfaces';

const Logo = styled.img<ILogoProps>`
  ${({ isHomeContent, theme }) => css`
    color: ${theme.colors.red};
    height: ${isHomeContent ? '25px' : '40px'};
    margin-right: ${isHomeContent && '40px'};
  `}
`;

export default Logo;