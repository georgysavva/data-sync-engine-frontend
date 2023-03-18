import UserCard from "@/components/UserCard";
import { User } from "@/entities/user";
import { List, ListItem, Typography } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";

export default function Users(props: { users: User[] }) {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        User Accounts
      </Typography>
      <List>
        {props.users.map((user) => (
          <ListItem disablePadding key={user.id}>
            <UserCard user={user} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: users }: { data: User[] } = await axios.get(
    `${process.env.BACKEND_API_BASE_URL}/users`
  );

  return {
    props: { users },
  };
};
