import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { ReactComponent as RegisterIcon } from '../../icons/login.svg';
import { register } from 'redux/auth/operations';
import {
  Section,
  Container,
  RegisterWrap,
  IconWrap,
  FormTitle,
  Form,
  FormSpan,
  Label,
  Input,
  EmailIcon,
  KeyIcon,
  NameIcon,
  Submit,
  CheckBoxLabel,
  Text,
  SignInNav,
} from './RegisterForm.styled';
import { useState } from 'react';

export const RegisterForm = () => {
  const [agreed, setAgreed] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(agreed)

    if (agreed) {
      toast.error('Please agree to the privacy policy.');
    }

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const HandleChange = evt => {
    const { name, value, type, checked } = evt.target;

    setAgreed({ [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <Section>
      <Container>
        <RegisterWrap>
          <IconWrap>
            <RegisterIcon width="35" height="35" fill="#fff" />
          </IconWrap>
          <FormTitle>Sign Up</FormTitle>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Label>
              <FormSpan>Username</FormSpan>
              <NameIcon />
              <Input type="text" name="name" autoComplete="off" />
            </Label>
            <Label>
              <FormSpan>Email</FormSpan>
              <EmailIcon />
              <Input type="email" name="email" autoComplete="off" />
            </Label>
            <Label>
              <FormSpan>Password</FormSpan>
              <KeyIcon />
              <Input type="password" name="password" autoComplete="off" />
            </Label>
            <CheckBoxLabel>
              <input type="checkbox" checked={agreed} onChange={HandleChange} />
              <FormSpan>I agree to the privacy policy </FormSpan>
            </CheckBoxLabel>
            <Submit type="submit" disabled={!agreed}>
              Register
            </Submit>
          </Form>
          <Text>
            Already have an account? <SignInNav to="/login">Sign in</SignInNav>
          </Text>
        </RegisterWrap>
      </Container>
    </Section>
  );
};
