import { ContactEditor } from '../ContactEditor/ContactEditor';
import ContactList from '../ContactList/ContactList';
import { ContactSearch } from '../ContactSearch/ContactSearch';
import Modal from '../Modal/Modal';
import ContactForm from '../ContactForm/ContactForm';
import { selectModal } from 'redux/modal/selectors';
import { useSelector } from 'react-redux';
import { selectStatus } from 'redux/status/selectors';
import { Profile } from '../Profile/Profile.jsx';
import { EditForm } from '../EditForm/EditForm';
import { ContactMenu, Main, MainContainer } from './ContactWrap.styled';

export const ContactWrap = () => {
  const modal = useSelector(selectModal);
  const status = useSelector(selectStatus);

  return (
    <Main>
      <MainContainer>
        <ContactMenu>
          <ContactEditor />
          <ContactSearch />
        </ContactMenu>
        <ContactList />
      </MainContainer>

      {modal && (
        <Modal>
          {status === 'add' && <ContactForm />}
          {status === 'view' && <Profile />}
          {status === 'edit' && <EditForm />}
        </Modal>
      )}
    </Main>
  );
};
