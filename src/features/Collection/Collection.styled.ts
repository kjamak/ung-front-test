import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  gap: 20px;
  padding: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LoadingIndicator = styled.div`
  font-size: 1rem;
  color: #555;
`;

export const EmptyState = styled.div`
  font-size: 1.5rem;
  color: #555;
  text-align: center;
  margin-top: 50px;
`;
