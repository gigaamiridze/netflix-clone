import styled, { css } from 'styled-components';

const SliderWrapper = styled.div`
  position: relative;

  svg {
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
    }

    &:last-child {
      right: 0;
    }
  }
`;

export default SliderWrapper;