import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  margin: 20px;
  font-size: 24px;
  font-weight: 500;
  color: #0000FF;
  &.active {
    color: #FFFF00;
  }
`;