<<<<<<< HEAD
# Employee App

This is a CRUD (Create, Read, Update, Delete) application built with [Next.js](https://nextjs.org), a React framework, for managing employee data. This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/api-reference/create-next-app).

## Features

- Create new employee records
- Read and view employee details
- Update existing employee information
- Delete employee records
- Responsive design with TailwindCSS
- API integration using Axios
=======

# Employee Management Backend

This is a RESTful API built with Node.js, Express.js, and MongoDB for managing employee data. It serves as the backend companion to the [Employee App frontend](https://github.com/Devp-sriram/frontend-for-coursera-crud-app).

docker image : https://hub.docker.com/r/devpsriram/employee-app

## Features

- CRUD operations for employees
- Data validation and sanitization
- Authentication and authorization
- API endpoints for creating, reading, updating, and deleting employee records
- Integration with MongoDB for data storage
>>>>>>> origin/main

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- Node.js (>= 14.x)
<<<<<<< HEAD
- npm (>= 6.x) or yarn (>= 1.x) or pnpm (>= 5.x) or bun (>= 0.x)
=======
- npm (>= 6.x)
>>>>>>> origin/main

### Installation

Clone the repository:

```bash
<<<<<<< HEAD
git clone https://github.com/Devp-sriram/frontend-for-coursera-crud-app.git
cd frontend-for-coursera-crud-app
```

Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

to run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



Environment Variables
Create a .env.local file in the root of the project and add your configurations:

```bash
NEXT_PUBLIC_BACKEND_URL=<your_api_url>
```
for back-end refer this repo : https://github.com/Devp-sriram/coursera-crud-project

=======
git clone https://github.com/Devp-sriram/coursera-crud-project
```

### Install dependencies 

```bash
npm install
```

### Start server

```bash
npm start
```

open http://localhost:4000/


### add .env file

```bash
DB_URL = <mongodb url>
```

### db schema 
```json
{
"_id":{"$oid":"675997c56eead6e20ec3d35f"},
"email":"lawrance@gmail.com",
"password":"Lawrance@110",
"company":"110 traders",
"data":[
   {
   "firstname":"Bruce",
   "lastname":"venkatraman",
   "dep":"dermatologist",
   "_id":{"$oid":"6767c1131ad6dbfe7720be78"}
   },
   {
   "firstname":"Foxx",
   "lastname":"Rayappan",
   "dep":"dentist",
   "_id":{"$oid":"6767d6d7a333ecf4b9dfa051"}
   },
   {
   "firstname":"Alfred",
   "lastname":"Ayyasamy",
   "dep":"dentist",
   "_id":{"$oid":"6767d6e5a333ecf4b9dfa057"}
   }
],
"createdAt":{"$date":{"$numberLong":"1733924808603"}},
"updatedAt":{"$date":{"$numberLong":"1734858481046"}},
"__v":{"$numberInt":"0"}}
```

### endpoints


1. **signin**
   
   -POST `/signin`
   
   -request body :


   ```json
   { "email": "john@example.com", "password": "John@123","company":"john & Doe co"}
    ```


2. **login**
   
   -POST /login
   
   (you get all data from back-end replacement of GET request)
   

   -request body :
   ```json
    { "email": "john@example.com", "password": "John@123" }
   ```


3.**Add-Employee**

  -POST /addEmployee/:id
  
  (id = _id on user collection db)

  
  -request body :
  ```json
  {
  "firstname":"pepper",
  "lastname":"pots",
  "dep":"personal assistance"
  }
  ```


4.**update-Employee**

  -PUT /updateEmployee/:id/:employeeid
  
  **(
   id :  _id on user collection db , 
   employeeId : _id of employee from data array on corresponding document in user collection 
  )**
  
  request body :
  ```json 
    {
    "firstname": "pepper",
    "lastname": "pots",
    "dep": "asistance"
    }
  ```

5.**Delete-Employee**

  -DELETE /deleteEmployee/:id/:employeeid
  
  **(
   id :  _id on user collection db , 
   employeeId : _id of employee from data array on corresponding document in user collection 
  )**

  request body : none
>>>>>>> origin/main
