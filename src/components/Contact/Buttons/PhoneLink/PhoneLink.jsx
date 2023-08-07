
import { ReactComponent as PhoneIcon } from 'icons/phone.svg';

import { Link } from './PhoneLink.styled';

const PhoneLink = ({ id }) => {

    return (
      <Link type="button" hashtag="telnumber">
        <PhoneIcon width="22" height="22" fill="#fff" />
      </Link>
    );
};

export default PhoneLink;
