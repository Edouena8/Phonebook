import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ReactComponent as LoginIcon } from '../../icons/login.svg';
import { CheckBoxLabel, EmailIcon, Form, FormTitle, IconWrap, Input, KeyIcon, Label, LoginBackdrop, LoginContainer, LoginWrap, SignUpNav, Span, Submit, Text } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginBackdrop>
      <LoginContainer>
        <LoginWrap>
          <IconWrap>
            <LoginIcon width="35" height="35" fill="#fff" />
          </IconWrap>

          <FormTitle>Log In</FormTitle>
          <Text>Loging here using your email and password</Text>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Label>
              <EmailIcon />
              <Input type="email" name="email" />
            </Label>
            <Label>
              <KeyIcon />
              <Input type="password" name="password" />
            </Label>
            <CheckBoxLabel>
              <input type="checkbox"  />
              <Span>Remember me</Span>
            </CheckBoxLabel>
            <Submit type="submit">Log In</Submit>
          </Form>
          <Text>
            Don't have an account? <SignUpNav to="/register">Sigh up</SignUpNav>
          </Text>
        </LoginWrap>
      </LoginContainer>
    </LoginBackdrop>
  );
};
