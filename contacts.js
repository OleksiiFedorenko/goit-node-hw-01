const fs = require('fs/promises');
const path = require('node:path');

const contactsPath = path.basename('/db/contacts.json', '.json');

async function listContacts() {
  const data = await fs.readFile(contactsPath);

  console.log(data);
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath);
  console.log(data);
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath);
  console.log(data);
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath);
  console.log(data);
}

function hi() {
  console.log('hi');
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  hi,
};
