import { StripeCustomer } from "@/entities/stripe-customer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const StripeCustomerCard = (props: { stripeCustomer: StripeCustomer }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography component="div">ID: {props.stripeCustomer.id}</Typography>
        <Typography component="div">
          Email: {props.stripeCustomer.email}
        </Typography>
        <Typography component="div">
          Data: <pre>{JSON.stringify(props.stripeCustomer.data, null, 2)}</pre>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StripeCustomerCard;
