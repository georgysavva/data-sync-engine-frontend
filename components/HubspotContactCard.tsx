import { HubspotContact } from "@/entities/hubspot-contact";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const HubSpotContactCard = (props: { hubspotContact: HubspotContact }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography component="div">ID: {props.hubspotContact.id}</Typography>
        <Typography component="div">
          Email: {props.hubspotContact.email}
        </Typography>
        <Typography component="div">
          Data: <pre>{JSON.stringify(props.hubspotContact.data, null, 2)}</pre>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HubSpotContactCard;
