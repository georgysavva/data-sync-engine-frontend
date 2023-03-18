import { User } from "@/entities/user";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserCard = (props: { user: User }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          User {props.user.id}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Service {props.user.service}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/users/${props.user.id}/data`}>
          Data
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
