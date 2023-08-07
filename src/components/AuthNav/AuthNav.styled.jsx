import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const AuthLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #ffffff;

  &:active,
  &:hover {
    border-bottom: 2px solid #ffffff;
  }
`;

export const AuthPrimaryBtn = styled(NavLink)`
  display: inline-block;
  border-radius: 6px;
  padding: 11px 34px;
  text-align: center;
  min-width: 130px;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid transparent;
  cursor: pointer;

  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;
  text-decoration: none;

  &:hover {
    background-color: #e6b333;
  }
`;

export const AuthSecondaryBtn = styled(NavLink)`
  display: inline-block;
  border-radius: 6px;
  padding: 11px 34px;
  text-align: center;
  min-width: 130px;
  color: #ffffff;
  background-color: #000000;
  border: 1px solid #ffffff;
  cursor: pointer;

  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;
  text-decoration: none;

  &:active,
  &:hover {
    color: #e6b333;
    border: 1px solid #e6b333;
  }
`;
