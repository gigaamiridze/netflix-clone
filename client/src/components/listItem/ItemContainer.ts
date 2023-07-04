import styled, { css } from 'styled-components';

const ItemContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.main};
    color: ${theme.colors.white};
  `}
  width: 225px;
  height: 120px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    display: none;
  }

  &:hover {
    width: 325px;
    height: max-content;
    position: absolute;
    top: -150px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    border-radius: 6px;

    img {
      height: 140px;
    }

    video {
      width: 100%;
      height: 140px;
      display: block;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export default ItemContainer;