<div align="center">
        <img src="https://cdn-icons.flaticon.com/png/512/508/premium/508312.png?token=exp=1658171857~hmac=6e84e1d248dd8a3868c4d32f19c849cf" alt="logo" width="200px"> 
</div>
                                                                                                                       
[logo_url](https://www.flaticon.com/free-icons/security)
           
<h1 align="center"> DrivenPass Api</h1>

<div align="center">
    <p> API to keep all your passwords safely stored in one place. </p>
</div>

- Link to heroku deploy: https://drivenpass-api.herokuapp.com/</p>

## About

DrivenPass is an API that provides ways for the user to safely store all needed passwords and private informations as encrypted data, and also ways to easily retrieve this info, when needed.

Below are the implemented endpoints:

- '/sign-up' --> Methods: POST
- '/sign-in' --> Methods: POST
- '/cards' --> Methods: POST, GET
- '/cards/:id' --> Methods: GET
- '/cards/:id' --> Method: DELETE
- '/credentials' --> Methods: POST, GET
- '/credentials/:id' --> Methods: GET
- '/credentials/:id' --> Method: DELETE
- '/safe-notes' --> Methods: POST, GET
- '/safe-notes/:id' --> Methods: GET
- '/safe-notes/:id' --> Method: DELETE
- '/wifi' --> Methods: POST, GET
- '/wifi/:id' --> Methods: GET
- '/wifi/:id' --> Method: DELETE
- '/documents' --> Methods: POST, GET
- '/documents/:id' --> Methods: GET
- '/documents/:id' --> Method: DELETE

> Check section <a name="Endpoints details">Endpoint details</a> to know how to properly use each endpoint.

## Technologies

The following tools and frameworks were used in the construction of the project:<br>

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## How to run

> **<p>From localhost url:</p>**

1. Clone this repository to your local machine;
2. Run `npm i` from your terminal to install dependencies;
3. Add a `.env` file to the root of the project with the following content (Note that this guide considers that you already have PostgreSQL installed and properly configured in your environment):

   ```
   DATABASE_URL=postgres://postgres:<password>@localhost:5432/drivenpass

   ```

4. Run prisma script to generate the database
   ```
     npx prisma migrate dev
   ```
5. Add to `.env` file the following environment keys (Only SECRET_KEY is required and it can be any string, preferably a hashed one):

```.env
  SECRET_KEY=<cryptr_secret_key>
  PORT=<prefered_optional_port>
  MODE=<DEV | PROD>
```

6. Run `npm run dev` to run the project on the PORT you chose, or 4000 if none are defined on `.env`

- `baseUrl: http://localhost:4000`

#

> **<p>From <b>DrivenPass-api</b> url, deployed on Heroku:</p>**

You can also use all the endpoints from this project through the deployed Heroku app, using its deploy URL:

- `baseURL: https://drivenpass-api.herokuapp.com/`

## **Endpoints details**

- '/sign-up' --> Methods: POST
- '/sign-in' --> Methods: POST
- '/cards' --> Methods: POST, GET
- '/cards/:id' --> Methods: GET
- '/cards/:id' --> Method: DELETE
- '/credentials' --> Methods: POST, GET
- '/credentials/:id' --> Methods: GET
- '/credentials/:id' --> Method: DELETE
- '/safe-notes' --> Methods: POST, GET
- '/safe-notes/:id' --> Methods: GET
- '/safe-notes/:id' --> Method: DELETE
- '/wifi' --> Methods: POST, GET
- '/wifi/:id' --> Methods: GET
- '/wifi/:id' --> Method: DELETE
- '/documents' --> Methods: POST, GET
- '/documents/:id' --> Methods: GET
- '/documents/:id' --> Method: DELETE

### **`Method: POST, Route: '/sign-up'`**

> It's possible to sign up a new user.

- In order to create a new user, a password and email must be provided in the request body.

  ```typescript
  {
      "password": string,
      "email": "<email>"
  }
  ```

  `-> SIGN-UP VALIDATION:`

- `all`: required
- `email`: must be a valid email address
- `password`: must be at least a 10 digits long string

#

### **`Method: POST, Route: '/sign-in'`**

> A user can get a access token that will be used to access the API for a period of time.

- In order to get the access token, a password and email must be provided in the request body.

  ```typescript
  {
      "password": string,
      "email": "<email>"
  }
  ```

  `-> SIGN-UP VALIDATION:`

- `all`: required
- `email`: must be a valid email address from a registered user
- `password`: must be at least a 10 digits long string from the same user

`--> SIGN-IN RETURN:`

```typescript
  {
    token: <access_token>
  }
```

.
.
.

documentation still in progess...

<!-- TODO: add other endpoints documentation -->
