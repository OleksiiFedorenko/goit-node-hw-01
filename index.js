const contacts = require('./contacts.js');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case 'get':
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case 'add':
      const addedContact = await contacts.addContact({ name, email, phone });
      console.log(addedContact);
      break;

    case 'remove':
      const removedContact = await contacts.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
      break;
  }
};

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: 'rsKkOQUi80UsgVPCcLZZW' });
// invokeAction({
//   action: 'add',
//   name: 'Alec Howard',
//   email: 'Donec.elementum@scelerisquescelerisquedui.net',
//   phone: '(748) 206-2688',
// });
// invokeAction({ action: 'remove', id: 'rsKkOQUi80UsgVPCcLZZW' });
