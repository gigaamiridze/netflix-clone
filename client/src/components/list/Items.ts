import styled from 'styled-components';

const Items = styled.div`
  width: max-content;
  margin-left: 50px;
  display: flex;
  align-items: center;
  column-gap: 5px;
  transform: translateX(0px);
  transition: ${({ theme }) => theme.transition};
`;

export default Items;