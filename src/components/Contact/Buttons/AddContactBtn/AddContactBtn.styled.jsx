import styled from '@emotion/styled';

export const AddBtn = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 15px;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  transform: scale(1);
  box-shadow: 0 0 5px 5px rgba(34, 60, 80, 0.2);
  transition: box-shadow 0.5s, transform 0.5s;

  &: hover {
    background-color: #e6b333;
    color: #fff;
    ransform: scale(1.2);
    box-shadow: 0 0 15px 7px rgba(34, 60, 80, 0.2);
    transition: box-shadow 0.5s, transform 0.5s;
  }
`;
