const contacts = require('./contacts.js');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'getAll':
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case 'getById':
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case 'removeById':
      const removedContact = await contacts.removeContact(id);
      console.log(removedContact);
      break;

    case 'add':
      const addedContact = await contacts.addContact({ name, email, phone });
      console.log(addedContact);
      break;

    default:
      console.log('Unknown action');
      break;
  }
};

// invokeAction({ action: 'getAll' });
// invokeAction({ action: 'getById', id: 'rsKkOQUi80UsgVPCcLZZW' });
// invokeAction({ action: 'removeById', id: 'rsKkOQUi80UsgVPCcLZZW' });
invokeAction({
  action: 'add',
  name: 'Alec Howard',
  email: 'Donec.elementum@scelerisquescelerisquedui.net',
  phone: '(748) 206-2688',
});
