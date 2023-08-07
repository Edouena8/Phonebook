import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
  color: #ffffff;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
`;

export const TitleSpan = styled.span`
  background-color: #e6b333;
`;

export const AddBtn = styled.button`
  display: inline-block;
  margin-bottom: 20px;
  padding: 11px 34px;
  text-align: center;
  background: #e6b333;
  border: none;
  color: white;
  cursor: pointer;

  position: relative;
  border: 2px solid #d29a0d;
  transition: 0.4s;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: 0.4s;
  }
  &:hover:after {
    border-color: #d29a0d;
    width: calc(100% - 10px);
    height: calc(100% + 10px);
  }
`;
