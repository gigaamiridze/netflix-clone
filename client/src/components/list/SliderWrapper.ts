import styled, { css } from 'styled-components';
import { ISliderProps } from '../../interfaces';

const SliderWrapper = styled.div<ISliderProps>`
  position: relative;

  .arrow-icon {
    ${({ theme }) => css`
      background-color: ${theme.colors.transparentBlack};
      color: ${theme.colors.white};
    `}
    width: 50px;
    height: 100%;
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;

    &:first-child {
      left: 0;
      display: ${({ isMoved }) => !isMoved ? 'none' : 'block'};
    }

    &:last-child {
      right: 0;
    }
  }
`;

export default SliderWrapper;