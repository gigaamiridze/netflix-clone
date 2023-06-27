import styled from 'styled-components';

const Details = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  span {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    font-weight: 600;

    &:nth-child(2) {
      border: 1px solid ${({ theme }) => theme.colors.gray};
      padding: 5px;
    }
  }
`;

export default Details;