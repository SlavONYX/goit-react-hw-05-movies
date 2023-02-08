import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
  width: 100px;
  text-align: center;
  padding: 8px 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  text-decoration: none;
  color: blue;
  font-weight: 500;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 32px;
  opacity: 0.9;
  &.active,
  &:hover,
  &:focus {
    opacity: 1;
  }
`;