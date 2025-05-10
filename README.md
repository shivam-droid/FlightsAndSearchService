# Welcome to Flights Service ✈

## Project Setup
- Clone the projects in your local 
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variables
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```
- Once you have added your db config as listed above , go to src folder from your terminal and execute `npx sequelize db:create`


## DB Design
- Airplane Table
- Flight Table
- City Table
- Airport Table

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights but a flight belongs to only one airport


## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_At
    Relationship -> City has many airports and Airport belongs to a city (one to many)
    
```
npx sequelize model:generate --name City --attributes name:String
npx sequelize model:generate --name Airport --attributes name:String,address:String,city_id:Integer

npx sequelize db:migrate

npx sequelize seed:generate --name add-airplanes
npx sequelize db:seed:all
```
