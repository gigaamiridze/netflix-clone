import styled, { css } from 'styled-components';
import { ILogoProps } from '../../interfaces';

const LogoWrapper = styled.div<ILogoProps>`
  ${({ isNavbarContent, theme }) => css`
    margin-right: ${isNavbarContent && '40px'};

    svg {
      fill: ${theme.colors.red};
      height: ${isNavbarContent ? '25px' : '40px'};
    }
  `}
`;

export default LogoWrapper;