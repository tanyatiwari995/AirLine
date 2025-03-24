This is a base  node js template it have been prepare  it have been prepare node model recommentaton


"src">  inside the  src folder all the actual  sorce code regrading  the project reside this will not include  any kind of test (You might want to make seperate folder)

Inside the "src" foldet

config: in this folder anything and  everythin reguarding any configration  or set up of a libraies  or modules will be done.
For Example: setting up  'dotenv' so thar we can use the enivorment variable  anywhere in a  cleaner fashion, this is done in the  'server-config.js'  can be setup your logging  libary that can help you to prepare meaningful logs to configuration for this libary should also be done here

-'routes'>  in thre routes folder we register  a  route  and the  corresponding   middlewaare and controller to it.
-'middleware'-> they are just going  to intercept  the request  where can we write  our vulerabilites , authentication etc.

-'controller'-> ther are bind  of the test in middleware as post them you call your bussinesslayer  to execute the business  logic.
In controller  are just recive the  incoming requestand data  and pass through the bussiness layer  and once bussiness layer return  as output , we structure  the API  response in controllers and send the output.

-'repostiries' -> this folder  contain  all the  logic using which  we intract the  DB by writting  quries , all   the r raw  quries  or ORM  quires will go  here

-'services' ->  contain the bussiness  logic and interative with all repositries with  repositries  for dat  from database.

-'utilis' -> contain  helper method , error classes etc.


 
 Download  this template from github  and open  it your  favouraitae  text editor .In root directory create  a .en file  and following  env variable
 ...

 ex:
  ```
   PORT = 3000
   ```
   Inside the src/config folder  create a file named as config.json and write the following code:

   ```{
  "development": {
    "username": "root",
    "password":"mypassword" ,
    "database": "database_development",
    "host": "localhost",
    "dialect": "mysql"
  },

  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1", 
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
 If you are setting up  your enviorment , then variable then write the username of  your db, password of your db  and indialect mention  whatever  db you are using  for  ex mysql,mariadb etc.


 If  you are  setting  up  test  or prod  enviorment , make   sur you  also replace  the host with the hosited db url