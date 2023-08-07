import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { ReactComponent as DeleteIcon } from 'icons/delete.svg';
import { IconBtn } from './IconButton.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { toggleModal } from 'redux/modal/slice';
import { selectModal } from 'redux/modal/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import { getSelectedContact } from 'utils/getSelectedContact';

const IconButton = ({ id, ...allyProps }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const modal = useSelector(selectModal);
  const { name } = getSelectedContact(contacts, id);

  const handleDelete = () => {
    if (modal) {
      dispatch(toggleModal(modal));
    }
    dispatch(deleteContact(id));
    toast.success(`Contact ${name} deleted successfully!`);
  }

  return (
    <IconBtn type="button" onClick={handleDelete} {...allyProps}>
      <DeleteIcon width="22" height="22" fill="#fff" />
    </IconBtn>
  );
};


IconButton.propTypes = {
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
