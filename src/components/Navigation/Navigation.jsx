import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ul>
      <li>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
      </li>

      {isLoggedIn && (
        <li>
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
};
