import styled from 'styled-components';

const Icons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  svg {
    font-size: 32px;
    padding: 5px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
  }
`;

export default Icons;