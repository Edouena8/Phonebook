import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'redux/modal/slice';
import { selectModal } from 'redux/modal/selectors';
import { clickModalBtn } from 'redux/status/slice';
import { AddBtn, Title, TitleSpan } from './ContactEditor.styled';

export const ContactEditor = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  
  const handleAddContact = () => {
    dispatch(clickModalBtn('add'));
    dispatch(toggleModal(modal));
  }

  return (
    <div>
      <Title>
        <TitleSpan>P</TitleSpan>honebook
      </Title>

      <AddBtn
        type="button"
        onClick={handleAddContact}
      >
        Create contact
      </AddBtn>
    </div>
  );
};
