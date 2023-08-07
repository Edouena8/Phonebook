import styled from '@emotion/styled';

export const ContactWrap = styled.ul`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 40px;
  padding-left: 40px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  &:hover {
    border-radius: 5px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.4);
  }
`;

export const ContactModalBtn = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const ContactText = styled.p`
  font-size: 25px;
`;

export const IconWrap = styled.div`
  display: flex;
  margin-left: auto;

  gap: 10px;
`;


