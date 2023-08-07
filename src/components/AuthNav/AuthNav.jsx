import {
  AuthList,
  AuthPrimaryBtn,
  AuthSecondaryBtn,
} from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthList>
      <li>
        <AuthPrimaryBtn to="/login">Log In</AuthPrimaryBtn>
      </li>
      <li>
        <AuthSecondaryBtn to="/register">Register</AuthSecondaryBtn>
      </li>
    </AuthList>
  );
};
