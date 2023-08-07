import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const NavigLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding-top: 21px;
  padding-bottom: 21px;
  margin-right: 12px;
  color: #ffffff;

  &:last-child {
    margin-right: 0;
  }

  &:active,
  &:hover {
    color: #e6b333;
  }
`;
