import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  margin-top: 10px;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 500;
    margin-left: 50px;
  }

  div {
    position: relative;
  }
`;

export default ListContainer;