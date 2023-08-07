import PropTypes from 'prop-types';
import { IconBtnEdit } from './IconBtnEdit.styled';
import { useDispatch, useSelector } from 'react-redux';
import { clickModalBtn } from 'redux/status/slice';
import { toggleModal } from 'redux/modal/slice';
import { selectModal } from 'redux/modal/selectors';

const IconButton = ({ children, id, ...allyProps }) => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);

  const handleContactEdit = () => {
    dispatch(clickModalBtn('edit'));
    dispatch(toggleModal(modal));
  };

  return (
    <IconBtnEdit type="button" onClick={handleContactEdit} {...allyProps}>
      {children}
    </IconBtnEdit>
  );
};

IconButton.defaultProps = {
  children: null,
};

IconButton.propTypes = {
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
