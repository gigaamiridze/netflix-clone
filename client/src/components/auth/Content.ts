import styled from 'styled-components';

export const FormContent = styled.div`
  background-color: rgba(0, 0, 0, .80);
  padding: 60px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  h2 {
    font-size: 32px;
    font-weight: 500;
  }

  form {
    max-width: 314px;
    width: 100%;
  }
`;