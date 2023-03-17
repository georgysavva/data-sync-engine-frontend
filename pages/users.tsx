import { User } from "@/entities/user.js";
import axios from "axios";
import { GetServerSideProps } from "next";

export default function Users(props: { users: User[] }) {
  return (
    <div>
      <h1>All users Accounts</h1>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.id} {user.service}
          </li>
        ))}
      </ul>
    </div>
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
