import styled from 'styled-components';

export const List = styled.li`
  list-style: decimal-leading-zero;
  > a {
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: #2a363b;
  &.active,
  &:hover,
  &:focus {
    color: #2196f3;
  }
`;