import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// I would create theme file for styled-components to reuse colors etc but since this is test I will keep it like this

export const PlayerImage = styled.img`
  width: 100%;
  max-height: 258px;
  object-fit: cover;
  height: auto;
  display: block;
`;

export const PlayerName = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

export const PlayerDOB = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const ImageLoadingIndicator = styled.div`
  font-size: 1rem;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;
