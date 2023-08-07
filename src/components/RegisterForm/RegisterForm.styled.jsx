import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { GoPerson, GoRead, GoKey } from 'react-icons/go';


export const Section = styled.div`
  min-height: calc(100vh - 50px);
  margin-left: auto;
  margin-right: auto;
  background-image: url(https://kubnews.ru/upload/resize_cache/iblock/04d/1200_630_2/04dc38e0a41da124d5924b7c030d5d8a.jpg);
  background-color: #727272;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  width: 1230px;
  margin: 0 auto;
  padding: 100px 15px;
`;

export const RegisterWrap = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding: 50px 50px;
  text-align: center;
  background-color: #000000a3;
  border-radius: 5px;
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

export const Form = styled.form`
  position: relative;
`;

export const FormSpan = styled.span`
  display: flex;
  color: #ffffff;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  height: 40px;
  border-radius: 3px;
  //   margin: 5px 0;
  margin-top: 20px;
  outline: none;

  background: transparent;
  border: 2px solid #22272d;
  padding-left: 45px;
  color: #e6b333;

  &:focus {
    border: 1px solid white;
    box-shadow: none;
  }
`;

export const Text = styled.p`
  color: #ffffff;
`;


export const NameIcon = styled(GoPerson)`
  position: absolute;
  width: 30px;
  height: 30px;
  margin-top: 43px;
  padding: 7px;
  left: 5px;

  // &::after {
  //   content:"";
  //   width:1px;
  //   height:30px;
  //   position:absolute;
  //   background:$border;
  //   top:0px;
  //   left:100%;

  &:focus {
    color: #e6b333;
  }
`;

export const EmailIcon = styled(GoRead)`
  position: absolute;
  width: 30px;
  height: 30px;
  margin-top: 43px;
  padding: 7px;
  left: 5px;

  // &::after {
  //   content:"";
  //   width:1px;
  //   height:30px;
  //   position:absolute;
  //   background:$border;
  //   top:0px;
  //   left:100%;

  &:focus {
    color: #e6b333;
  }
`;

export const KeyIcon = styled(GoKey)`
  position: absolute;
    width:30px;
    height:30px;
    margin-top: 43px;
    padding:7px;
    left:5px;

    &::after {
      content:"";
      width:1px;
      height:30px;
      position:absolute;
      background:$border;
      top:0px;
      left:100%;

    &:focus {
        background:white !important;
    }
`;

// // :focus .user{
// //   background:white !important;


export const CheckBoxLabel = styled.label`
  display: flex;
  gap: 10px;
`;

export const Submit = styled.button`
  display: block;
  width: 100%;

  margin-top: 20px;
  margin-bottom: 20px;
  padding: 11px 34px;
  text-align: center;
  background: #e6b333;
  border: none;
  color: white;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};;

  background-color: ${props => (props.disabled ? 'grey' : '#e6b333')};

  &:hover {
    background-color: ${props => (props.disabled ? 'grey' : '#d29a0d')}'
  }
`;

export const SignInNav = styled(Link)`
  color: #e6b333;
  cursor: pointer;

  &:hover {
    color: #d29a0d;
  }

  disabled={!agreed}
`;