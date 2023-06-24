import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 50px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;