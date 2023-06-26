import styled from 'styled-components';

const SliderWrapper = styled.div`
  width: max-content;
  margin: 10px 0 0 50px;
  display: flex;
  align-items: center;
  column-gap: 15px;
  transform: translateX(0px);
  transition: ${({ theme }) => theme.transition};
`;

export default SliderWrapper;