import toast from 'react-hot-toast';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { FaCheck } from 'react-icons/fa6';
import { ReactComponent as AddUserIcon } from 'icons/add.svg';
import { toggleModal } from 'redux/modal/slice';
// import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { selectModal } from 'redux/modal/selectors';
import {
  ErrorText,
  FormInput,
  FormTitle,
  FormWrap,
  IconWrap,
  LabelText,
  LabelWrap,
  MobileIcon,
  ModalBtn,
  ModalWrap,
  NameIcon,
} from './EditForm.styled';
import { selectContactId } from 'redux/contactId/selectors';
import { getSelectedContact } from 'utils/getSelectedContact';
import { updateContact } from 'redux/contacts/operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string(
    "Name main y contaonly letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  ).required('Name is a required field'),

  number: Yup.string(
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  )
    .min(3, 'Number must be at least 3 characters!')
    .max(12, 'Number must be at most 10 characters!')
    .required('Number is a required field'),
});

// const initialValues = {
//   name: '',
//   number: '',
// };

export const EditForm = () => {
  const contacts = useSelector(selectContacts);
  const contactId = useSelector(selectContactId);
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();

  const { name, number } = getSelectedContact(contacts, contactId);

  const duplicateContact = name => {
    const normalizedName = name.toLowerCase().trim();

    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (duplicateContact(name)) {
      return toast.error(`${name} is already in contacts`);
    }

    dispatch(updateContact({ contactId, name, number }));
    toast.success(`Contact ${name} edded successfully!`);
    dispatch(toggleModal(modal));
    resetForm();
  };

  return (
    <ModalWrap>
      <IconWrap>
        <AddUserIcon width="30" height="30" fill="#fff" />
      </IconWrap>
      <FormTitle>Update contact</FormTitle>
      <Formik
        initialValues={{ name, number }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <FormWrap>
          <LabelWrap>
            <LabelText>Name</LabelText>
            <NameIcon />
            <FormInput type="text" name="name" />
            <ErrorText name="name" component="p" />
          </LabelWrap>

          <LabelWrap>
            <LabelText>Number</LabelText>
            <MobileIcon />
            <FormInput type="tel" name="number" />
            <ErrorText name="number" component="p" />
          </LabelWrap>

          <ModalBtn type="submit">
            <FaCheck />
            Done
          </ModalBtn>
        </FormWrap>
      </Formik>
    </ModalWrap>
  );
};
