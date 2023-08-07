export const getSelectedContact = (contacts, id) => {
  return contacts.find(contact => contact.id === id);
};
