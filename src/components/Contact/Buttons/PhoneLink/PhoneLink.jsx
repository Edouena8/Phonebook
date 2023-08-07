import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { ReactComponent as PhoneIcon } from '../../../../icons/phone.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { toggleModal } from 'redux/modal/slice';
import { selectModal } from 'redux/modal/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import { getSelectedContact } from 'utils/getSelectedContact';
import { Link } from './PhoneLink.styled';

const PhoneLink = ({ id }) => {
    const contacts = useSelector(selectContacts);
    const { number } = getSelectedContact(contacts, id);

    return (
      <Link type="button" hashtag="telnumber">
        <PhoneIcon width="22" height="22" fill="#fff" />
      </Link>
    );
};

// IconButton.propTypes = {
//   'aria-label': PropTypes.string.isRequired,
// };

export default PhoneLink;
