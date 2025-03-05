import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    const data = await readContacts();
    const contacts = Array.isArray(data) ? data : [];
    const newContacts = [];
    for (let i = 1; i <= number; i++) {
        newContacts.push(createFakeContact());
    }
    await writeContacts([...contacts, ...newContacts]);
};

generateContacts(5);
