import PropTypes from 'prop-types';
import css from './IconBtnEdit.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as EditIcon } from '../../../../icons/edit.svg';
import { toggleModal } from 'redux/modal/slice';
import { selectModal } from 'redux/modal/selectors';
import { clickModalBtn } from 'redux/status/slice';
import { saveContactId } from 'redux/contactId/slice';
import { EditForm } from 'components/Contact/EditForm/EditForm';

export const IconBtnEdit = ({ id, ...allyProps }) => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);

  const handleEdit = () => {
    dispatch(clickModalBtn('edit'));

    if (modal) {
      return <EditForm/>
    }

    dispatch(toggleModal(modal));
    dispatch(saveContactId(id));
  };

  return (
    <button
      className={css.button}
      onClick={handleEdit}
      type="button"
      {...allyProps}
    >
      <EditIcon width="22" height="22" fill="#fff" />
    </button>
  );
};

IconBtnEdit.propTypes = {
  'aria-label': PropTypes.string.isRequired,
};

export default IconBtnEdit;
