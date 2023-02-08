import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  //   padding: 20px;
  font-size: 18px;
  font-weight: 500;
  //   text-decoration: none;
  color: #2a363b;
  &.active,
  &:hover,
  &:focus {
    color: #2196f3;
  }
`;
export const SectionMainInfo = styled.section`
  display: flex;
  border-top: 1px solid grey;
`;
export const SectionAddInfo = styled.section`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

export const MoviesList = styled.ul`
  list-style: none;
`;
export const AddList = styled.ul`
  list-style: none;
`;