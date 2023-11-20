# TactaInternship
Private github repository created by Amar Hasanović

First I would start of by apolagizing for publishing the project late. I had major unpredicted issues with GitHub and i needed time to
fix it.

In this project i used the mern stack programing languages. My databases were made in MongoDB, i hardcoded 2 of the 3 database tables, 
the third one(connections) can be filled through the backend server. I connected the server to my project in VS code ( I followed the steps I
got from the MONGODB web site and I connected it on MongoDB compass aswell). 

Up next was some front end work for which i wanted to leave for the end, but did some early work on it. More precicely i used basic buttons and antd
components to do a little work.

I also did some work on the App.js file in the src folder(made routes). And while we are on the src folder, I might add that i have made 3
component screens. They served as list screens(for multiple use) on the files in the pages folder( basic pages of the site).
Since I haven't finished the Front End i might add that i needed to work on the Back End first so i can use it to finish the front end, since i needed 
the APIs. I used useEffect to fetch the responses that i got with axios in the same file ( Note i was planning on doing that with the other pages as well).


In the backend i used the .env file to put my MONGOdb url. And made a config to fully connect to MongoDb and my Database there.
In congragation with my DB on MongoDb i made models of the 3 tables i had there, that is, i made schemas for each of the tables.
Since i needed a lot of work on the API routes i decided to go for 4 routes:
-getAllShoppers
-getAllItemsThatShopperDoesntHave
-createConnections
-getAllItemsForShopper

All of these were needed to finish the jobs i planed on the front end. All of them work nicely and I had checked that on Postman as clarification
I needed Index.js for telling me if the database was a success and to tell me if the server was successfully connected.


To start the project you will need:
- Node.js
- npm (Node Package Manager)
- MongoDB(connect to the url with MongoDB compass or Shell( i haven't used it))

Use npm start on both backend and frontend, sart backend first then frontend,  ctrc c then y to stop

In the terminal you will need to install some of the features I used in my project such as Axios, bcryptjs, cors, mongoose ext ( check package json) 

I don't think i forgot anything. Please keep in mind this is my first time writting one of these and there might be a lot of bad things about this ReadMe file

I am avalible all the time so if you have any difficulty with my program or you have questions for me I am happy to be of assistance.

Thank you for reading all the best


  
 
