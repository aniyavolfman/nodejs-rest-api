const path = require("path");
const fs = require("fs").promises;
const nanoid = require("nanoid");

const contactsPath = path.resolve("./models/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  return contacts.find((option) => option.id === contactId) || null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const newData = contacts.filter((option) => option.id !== contactId);
  const newContactList = `${JSON.stringify(newData)}`;
  const deletedContact = contacts.find((option) => option.id === contactId);

  await fs.writeFile(contactsPath, newContactList, "utf8");
  return deletedContact || null;
};

const addContact = async ({ name, email, phone }) => {
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  
  const newData = await listContacts();
  newData.push(newContact);
  const newContactList = `${JSON.stringify(newData)}`;

  await fs.writeFile(contactsPath, newContactList, "utf8");
  return newContact;
};

const updateContact = async (contactId, { name, email, phone }) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((option) => option.id === contactId);

  if (index === -1) {
    return null;
  }
  contacts[index] = { contactId, name, email, phone };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), "utf8");
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
