import { useDispatch, useSelector } from 'react-redux';
import { saveContactId } from 'redux/contactId/slice';
import { AddBtn } from './AddContactBtn.styled';
import { selectModal } from 'redux/modal/selectors';
import { toggleModal } from 'redux/modal/slice';
import { clickModalBtn } from 'redux/status/slice';

export const AddContactBtn = ({ id, name }) => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);

  const hanldeContactModal = () => {
    dispatch(clickModalBtn('view'));
    dispatch(toggleModal(modal));
    dispatch(saveContactId(id));
  };

  return (
    <AddBtn type="button" onClick={hanldeContactModal}>
      {name[0]}
    </AddBtn>
  );
};
