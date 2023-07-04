import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 20px 50px;
  }
`;

export default ListContainer;