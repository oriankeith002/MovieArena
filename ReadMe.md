[](https://youtu.be/CbscEZX5r_A )


# Introduction 
This is the final project presentation i have developed after taking on a Full stack software development course with Tunga under the Tech Impact Academy. I have learnt a lot in the past months and I would love to extend my great appreciation to the people below: 

Many thanks to:
**Instructors**
```
Hans Rijk, Charles Kato, Simon Peter Ojok
```
**Classmates**
```
Humphrey, Carol, Smith , Steven, Jerry
```
*Great appreciation for the knowledge sharing, learning and collaboration* 

## Requirements
To successfully  run the project the following applications are required on your computer system. 
- Node
- Mysql or mariadb (or any other sql based database of your choice)
  
# Set up Guide  

**Clone the repository***

```bash
git clone <THE-REPOSITORY-LINK-HERE>
```

**Add a `.env` file to the project**

- This file contains the path to our database which has the password and port 
- This can also contain any other desired configurations like the jwtSecret. 
- Create your own `.env` file with this format 
  - For my case i used a mysql database in the schema. 
  - This file will be auto generated with the prisma ORM but still create it to add parts like the port and Root. 
  - Replace `USER-NAME` and `YOUR-PASSWORD` to your local settings

```.env

DATABASE_URL="mysql://USER-NAME:YOUR-PASSWORD-HERE@localhost:3306/mymoviesysdb"
PORT=4000
ROOT_DIR=YOUR-PATH-TO-CLONE-REPO/MovieArena/


```


## API - Installations

**The API packages**

```bash
# change directory to the API folder
cd api
# install the dependencies
npm install 

```

**Setting up dev dependencies such as prisma and nodemon**

```bash

# install prisma using npm 
npm install prisma --save-dev

# initialize primas with database of choice
npx prisma init --datasource-provider mysql

# Optionally running a migration (I prefer this )
npx prisma migrate dev --name init 
# or run (this is optional)
npx prisma generate 


# install the prisma client 
npm install @prisma/client
```

Finally install `nodemon` to help with automatic restarting of the server during development 
```bash
npm install nodemon --save-dev
```

Start the API server by running 
```bash
npm start

```


## The Front-End React Application 

```bash
# install react application by simply running 
cd client/
npm install 

```

After installation of the front end dependencies.

```bash
# in the client directory, start the application
npm start

``` 


## The Application 
Visit the Link : https://youtu.be/CbscEZX5r_A

<Video src="https://www.youtube.com/watch?v=CbscEZX5r_A" controls="controls" style="max-width: 800px;"></Video>