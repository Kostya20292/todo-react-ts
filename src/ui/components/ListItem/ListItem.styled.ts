import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)<{ $isDone: boolean }>`
  text-decoration: none;
  padding: 10px;
  color: ${({ $isDone }) => ($isDone ? 'green' : 'red')};
`;
