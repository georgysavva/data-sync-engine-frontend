import HubspotContactCard from "@/components/HubspotContactCard";
import StripeCustomerCard from "@/components/StripeCustomerCard";
import { Service } from "@/entities/service";
import { UserData } from "@/entities/user-data";
import { List, ListItem, TextField, Typography } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const Data = (props: { userData: UserData[] }) => {
  const router = useRouter();
  const { userId } = router.query;
  const [data, changeData] = useState(props.userData);
  const emailInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const { data: userData }: { data: UserData[] } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/users/${userId}/data/search`,
      {
        params: { email: event.target.value },
      }
    );
    changeData(userData);
  };
  return (
    <>
      <Typography variant="h2" gutterBottom>
        User customers data
      </Typography>
      <TextField
        onChange={emailInputChange}
        id="customer-email"
        label="Customer email"
        variant="standard"
      />
      <List>
        {data.map((userDataItem) => (
          <ListItem disablePadding key={userDataItem.record.id}>
            {userDataItem.service === Service.Stripe && (
              <StripeCustomerCard stripeCustomer={userDataItem.record} />
            )}
            {userDataItem.service === Service.Hubspot && (
              <HubspotContactCard hubspotContact={userDataItem.record} />
            )}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.params?.userId;
  const { data: userData }: { data: UserData[] } = await axios.get(
    `${process.env.BACKEND_API_BASE_URL}/users/${userId}/data/search`
  );

  return {
    props: { userData: userData },
  };
};

export default Data;
