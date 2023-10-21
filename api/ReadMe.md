# Guide
Welcome to this is your guide to help you set up the backend server to run on your machine. 

## Setting up the backend server

Run the commands shown in the snippet below in your terminal. 

```bash

cd api

npm install 

npm start 

```

## Developer Instructions

```bash
# install express 
npm install express 

# install prisma using npm 
npm install prisma --save-dev

# initialize primas with database of choice
npx prisma init --datasource-provider mysql

# Optionally running a migration
npx prisma migrate dev --name init 
# or run
npx prisma generate 


# install the prisma client 
npm install @prisma/client

```

- A `.env` file is created with the DATABASE url. 
- Add this `.env` file in your `.gitignore` file since it contains sensitive credentials for the database.

## Tables / Models 
We have a users table and a movies table

- [ ] Movie Model 
- [ ] User Model 
- [ ] Genre Model

 

After defining the models of your choice, you can perform an initial migration with 


`