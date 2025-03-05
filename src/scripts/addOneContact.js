import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    const data = await readContacts();
    const contacts = Array.isArray(data) ? data : [];
    const newContacts = [];
    newContacts.push(createFakeContact());
    await writeContacts([...contacts, ...newContacts]);
};

addOneContact();
