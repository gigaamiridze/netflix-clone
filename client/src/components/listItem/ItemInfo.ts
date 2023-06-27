import styled from 'styled-components';

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  div {
    display: flex;
    align-items: center;
    column-gap: 10px;

    svg {
      font-size: 32px;
      padding: 5px;
      border: 2px solid ${({ theme }) => theme.colors.white};
      border-radius: 50%;
    }
  }
`;

export default ItemInfo;