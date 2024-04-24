import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Contact } from "../../app/models/contact";

interface Props{
    contact: Contact;
}

export default function ContactCard({contact}:Props){
    return (
        <Card>
            <CardHeader
            avatar={
                <Avatar>
                    {contact.name.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={contact.name}
            titleTypographyProps={{
                sx:{fontWeight:'bold', color: 'primary.main'}
            }}
            />
        <CardMedia
          sx={{ height: 140 }}
          image="http://picsum.photos/600"
          title={contact.name}
        />
        <CardContent>
          <Typography gutterBottom color='secondary' variant="h5">
            {contact.mobilePhone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {contact.phoneNumber} / {contact.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Call</Button>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    );
}