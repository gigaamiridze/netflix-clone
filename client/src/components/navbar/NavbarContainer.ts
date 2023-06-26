import styled, { css } from 'styled-components';
import { INavbarProps } from '../../interfaces';

const NavbarContainer = styled.div<INavbarProps>`
  ${({ isScrolled, theme }) => css`
    ${isScrolled 
      ? css`background-color: ${theme.colors.main};` 
      : css`background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);`
    }
    transition: ${theme.transition};
  `}
  width: 100%;
  height: 70px;
  padding: 0 50px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export default NavbarContainer;