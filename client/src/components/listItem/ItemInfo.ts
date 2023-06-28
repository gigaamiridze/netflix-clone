import styled from 'styled-components';

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px;
  
  p {
    font-size: 14px;
    line-height: 15px;
  }
  
  h6 {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 14px;
  }
`;

export default ItemInfo;