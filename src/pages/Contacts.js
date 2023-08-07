import { ContactWrap } from 'components/Contact/ContactWrap/ContactWrap';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';


export default function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactWrap />
      <Toaster/>
    </div>
  );
}
