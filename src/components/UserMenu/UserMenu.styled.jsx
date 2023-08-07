import styled from "@emotion/styled";

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
  color: #FFFFFF;
`;

export const UserBtn = styled.button`
  border-radius: 6px;
  padding: 11px 32px;
  color: #ffffff;
  background-color: #000000;
  border: 1px solid #ffffff;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;

  &:active,
  &:hover {
    color: #e6b333;
    border: 1px solid #e6b333;
  }
`;