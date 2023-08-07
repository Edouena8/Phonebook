import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { BarWrap, Container, Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <BarWrap>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </BarWrap>
      </Container>
    </Header>
  );
};
