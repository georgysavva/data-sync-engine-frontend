# data-sync-engine-frontend

This repository contains a rudimentary UI to display the data served by the [`data-sync-engine`](https://github.com/georgysavva/data-sync-engine) API. The design and UX pattern are primitive, just not to spend time on visual polishing.

## How to run

1. Download the repository.
2. `cd` to the root directory.
3. Run `npm install`.
4. Run `npm run build`
5. Run `npm start`.
6. The website is ready!

## How to view data

Go to `http://localhost:3000/users`. The page displays all user accounts, each with a "Data" button. Click it to go to a separate page with all Stripe/Hubspot data corresponding to that user account. On that page, you can additionally filter Stripe Customers and Hubspot Contacts by their email address.

## Tech stack

This project uses React, Next.js, TypeScript, and Material UI components.
