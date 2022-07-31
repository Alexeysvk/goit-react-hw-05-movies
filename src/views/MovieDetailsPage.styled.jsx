import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Wrap = styled.div`
  display: flex;
`;
export const Box = styled.div`
  max-width: 50%;
  margin: 20px;
`;
export const Btn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 8px;
  background: #0000FF;
  color: #FFFF00;
  font-size: 14px;
  cursor: pointer;
  border: none;
  transform: scale(1);
  transition-duration: 300ms;
  margin-top: 10px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  margin: 20px;
  font-size: 24px;
  font-weight: 500;
  color: #0000FF;
  &.active {
    color: #00a6ff;
  }
`;