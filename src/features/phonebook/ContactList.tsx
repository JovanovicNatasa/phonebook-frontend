import { Grid } from "@mui/material";
import { Contact } from "../../app/models/contact";
import ContactCard from "./ContactCard";


interface Props{
    contacts: Contact[];
}

export default function ContactList({contacts}:Props) {
  return (
    <Grid container spacing={4}>
      {contacts.map((contact) => (
        <Grid item xs={3} key={contact.id}>
            <ContactCard contact={contact}/>
        </Grid> 
      ))}
    </Grid>
  );
}
