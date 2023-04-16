// Import required packages and files
const jsonServer = require('json-server');
const axios = require('axios');
const swaggerDoc = require('./swagger');

// Create a new JSON Server instance
const server = jsonServer.create();

// Create a router instance based on the 'db.json' file
const router = jsonServer.router('db.json');

// Add default middleware (e.g., CORS, JSON parsing)
const middlewares = jsonServer.defaults();
server.use(middlewares);

// Retrieve data from JSONPlaceholder and save it to db.json
axios.get('https://jsonplaceholder.typicode.com/users')
 .then(response => {
   const data = response.data;
   console.log(data);

   // Write the retrieved data to 'db.json' file
   const fs = require('fs');
   fs.writeFile('db.json', JSON.stringify({ users: data }), (err) => {
     if (err) throw err;
     console.log('Data written to file');
   });
 })
 .catch(error => {
   console.log(error);
 });

// Add the Swagger documentation to the server
swaggerDoc(server);

// Add the router to the server instance
server.use(router);

// Set the port number and start listening for requests
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
