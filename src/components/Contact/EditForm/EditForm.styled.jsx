import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';
import { FaUser, FaMobileRetro } from 'react-icons/fa6';

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 50px 20px;
  text-align: center;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
`;
export const FormTitle = styled.h2`
  margin-bottom: 20px;
  color: #e6b333;
`;

export const FormWrap = styled(Form)`
  position: relative;
`;

export const LabelWrap = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const LabelText = styled.span`
  font-size: 15px;
  display: flex;
  color: #black;
`;
export const NameIcon = styled(FaUser)`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 26px;
  padding: 7px;
  left: 5px;

 

  &:focus {
    color: #e6b333;
  }
`;

export const MobileIcon = styled(FaMobileRetro)`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 113px;
  
  padding: 7px;
  left: 5px;
top: 40px
 

  &:focus {
    color: #e6b333;
  }
`;

export const FormInput = styled(Field)`
  width: 100%;
  padding: 5px;
  height: 40px;
  border-radius: 3px;
  margin-top: 4px;
  margin-bottom: 4px;
  outline: none;

  background: transparent;
  border: 2px solid #22272d;
  padding-left: 45px;
  color: #e6b333;

  &:focus {
    border: 1px solid #727272;
    box-shadow: none;
  }

 
`;



export const ModalBtn = styled.button`
  display: flex;
  gap: 4px;
  min-width: 130px;
  margin: 0 auto;
  padding: 11px 34px;
  background: #e6b333;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #d29a0d;
  }


`;

export const ErrorText = styled(ErrorMessage)`
  color: #8b0000;
`;
