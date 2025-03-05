import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const allContacts = await readContacts();
    const removeContact = allContacts.slice(0, -1);
    await writeContacts([...removeContact]);
};

removeLastContact();
