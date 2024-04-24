import { Contact } from "../../app/models/contact";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";


export default function Phonebook() {
    const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("http://localhost:8700/Contact/test")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <>
     <ContactList contacts={contacts}/>
    </>
  );
}
