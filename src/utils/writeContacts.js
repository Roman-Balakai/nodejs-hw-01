import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
        console.log('Успішно записано!');
    } catch (error) {
        console.error(error);
    }
};
