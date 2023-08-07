import IconButton from '../Buttons/IconButton/IconButton';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import {
  ContactItem,
  ContactText,
  ContactWrap,
  IconWrap,
} from './ContactList.styled';
import IconBtnEdit from '../Buttons/IconBtnEdit/IconBtnEdit';
import { AddContactBtn } from '../Buttons/AddContactBtn/AddContactBtn';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <ContactWrap>
        {visibleContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <AddContactBtn id={id} name={name} />
            <ContactText>
              {name}: {number}
            </ContactText>
            <IconWrap>
              <IconBtnEdit id={id} aria-label="Edit contact" />
              <IconButton id={id} aria-label="Delete contact" />
            </IconWrap>
          </ContactItem>
        ))}
        {isLoading && !error && <p>Loading... </p>}
      </ContactWrap>
    </div>
  );
};

export default ContactList;
