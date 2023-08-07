import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  selectContacts,
  selectError,
} from 'redux/contacts/selectors';
import { Title } from './ContactsSearch.styled';

export const ContactSearch = () => {
  const items = useSelector(selectContacts);
  const error = useSelector(selectError);

  return (
    <div>
      <Title>
        Contacts
        {`(${items.length})`}
      </Title>
      {error && Notify.failure(`${error}`)}
      {items.length > 0 && <Filter />}
    </div>
  );
};
