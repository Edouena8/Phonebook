import { getSelectedContact } from 'utils/getSelectedContact';
import { useSelector } from 'react-redux';
import { selectContactId } from 'redux/contactId/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import IconBtnEdit from '../Buttons/IconBtnEdit/IconBtnEdit';
import IconButton from '../Buttons/IconButton/IconButton';
import PhoneLink from '../Buttons/PhoneLink/PhoneLink';
import { ActionsList, Avatar, Description, Name, Tag } from './Profile.styled';

export const Profile = () => {
  const contacts = useSelector(selectContacts);
  const contactId = useSelector(selectContactId);
  const selectedContact = getSelectedContact(contacts, contactId);
  return (
    selectedContact && (
      <div>
        <Description>
          <Avatar
            src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
            alt={selectedContact.name}
            width="180"
          />

          <Name>{selectedContact.name}</Name>
          <Tag>{selectedContact.number}</Tag>
        </Description>

        <ActionsList>
          <li>
            <PhoneLink id={contactId} aria-label="telegram" />
          </li>
          <li>
            <IconBtnEdit id={contactId} aria-label="Edit contact" />
          </li>
          <li>
            <IconButton id={contactId} aria-label="Delete contact" />
          </li>
        </ActionsList>
      </div>
    )
  );
};
