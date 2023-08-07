import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { MenuWrapper, UserBtn, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <MenuWrapper>
      <UserName>Welcome, { user.name}</UserName>
      <UserBtn type="button" onClick={handleLogOut}>Logout</UserBtn>
    </MenuWrapper>
  );
};
