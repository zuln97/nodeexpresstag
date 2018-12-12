Reference: https://closebrace.com/tutorials/2017-03-02/creating-a-simple-restful-web-app-with-nodejs-express-and-mongodb
Here are the goals:

-Learn what REST means in plain English
-Store and retrieve JSON data in a MongoDB collection using HTTP POST and HTTP GET
-Remove data from the collection using HTTP DELETE
-Use AJAX for all data operations
-Update the DOM with jQuery

=====================================REST=================================
Representational State Transfer (REST) as: an architectural style that abstracts the architectural elements within a distributed hypermedia system. 

==========================================================================

1. Command D:/Projects/MongoNodeJs
>npm update -g express
>npm update -g express-generator
>express noderfid

2. Add 2 line in package.json
"mongodb": "^3.0.5",
    "monk": "^6.0.5",
=>we're adding the MongoDB and Monk packages so that we can access and control our database.

3. cd to your noderfid directory
>npm install

4. the first thing we need is a single page, open up our views folder, and start with layout.jade.
include jQuery, and two: include our master javascript file.

5.  index.jade – this is the only HTML file we'll need for the rest of our webapp.

6. http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/style.css  download this file and copy it over /public/stylesheets/style.css.

7. npm start

8. Databse
Create MongoDB

9. Listing Users (tags)
IN app.js
Add these lines below "var logger = require('morgan');"

// Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest2');

=>calling the Monk module and then giving it some basic configuration parameters (including telling it where the DB lives, and which database to use – noderfid).

 need to make our database accessible to our various http requests, as we did in the first tutorial. To do that, first find this section:
app.use('/', indexRouter);
app.use('/users', usersRouter);

Express middleware is sequential so placement in the code matters. If we put our DB code below the routers, the app will break, because the db object will not get passed to them. So just above those two lines, add this code:
// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

10.  move on to routing.
Open up /nodetest2/routes/tags.js  (tags.js = users.js)
var express = require('express');
var router = express.Router();

...

=>if you do an HTTP GET to /tags/taglist, our server will return JSON that lists all of the users in the database. 

11. create our global.js file now, so create a new text document and save it as /nodetest2/public/javascripts/global.js

 we'll stick with our specific global and move on to the DOM ready detect, which will fire off our table-filling method populateTable() when the page is ready for scripts to run. After that, we must of course define our table-filling method. That's where things get interesting, but not too terribly complex. We make a simple AJAX call via jQuery, iterate over the return JSON to create a big ol' content string with all our new HTML in it, and then inject that HTML into our existing table.

12. Populating User Info
Still working in global.js, we need to add one quick line to our populateTable() function. This line will stick all of our user data into the array we established earlier

What this is doing is sticking all of our returned user data, from the database, into our global variable, so that we can access it without repeatedly whaling on the database each time we click a name in our table



13. Fucntion Addtag
    // ADD TAG
    h2 Add Tag
    #addTag
      fieldset
        input#inputTagAntennaId(type='text', placeholder='Antenna Id')
        input#inputTagPC(type='text', placeholder='PC')
        br
        input#inputTagEPC(type='text', placeholder='EPC')
        button#btnAddTag Add Tag
    // /ADD TAG
# nodeexpresstag
# nodeexpresstag
