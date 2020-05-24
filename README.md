## Prepare database
* Download PostgreSQL [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
* Install it, on one of the steps you will have to create any password for **postgres** superuser, remember this password, you will need it
* Next you should run this command `psql -U postgres` in terminal
* If you will have some error like `no psql command detected` then find folder where postgresql was installed, go to `bin` folder and run the same command from this directory in your terminal
* Type your password
* If everything okay, type `CREATE DATABASE testdb;`
* Type `\l` to make sure that db was created
* Connect to **testdb** with command `\c testdb`
* If you want to delete db you can type `DROP DATABASE testdb`

## Run
When you will run backend server, it will create Instances for db
* projects
* users
* steps
* testcases

Next you can check these instances in db, in prev terminal write these commands to see what inside of each instance
* `select * from projects;`
* `select * from users;`
* `select * from steps;`
* `select * from testcases;`


