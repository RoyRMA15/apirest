const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API DOCUMENTATION ROGER RODRIGUEZ',
      version: '1.0.0',
      description: 'Welcome to the documentation for my API. This API retrieves data from JSONPlaceholder and saves it to a local `db.json` file using json-server.\n\nRunning the API:\nTo start the API, run the following command in your terminal:\nnode server.js\n\nThis will start the API server on `http://localhost:3000`.\n\nInstalled packages:\n\n- axios@1.3.5\n\n- json-server@0.17.3\n\n- swagger-jsdoc@6.2.8\n\n- swagger-ui-express@4.6.2\n\nEndpoints:\n- GET /posts\nRetrieves a list of posts from JSONPlaceholder.\n\n- GET /posts/:id\nRetrieves a specific post by ID from JSONPlaceholder.\n\n- POST /posts\nCreates a new post on JSONPlaceholder.\n\n- PUT /posts/:id\nUpdates a specific post by ID on JSONPlaceholder.\n\n- DELETE /posts/:id\nDeletes a specific post by ID from JSONPlaceholder.\n\nPostman Collection: U can find the Postman Collection and the Postman API test summary in the directory folder, open the Collection with Postman and run the different endpoints, along with their HTTP methods (GET, POST, PUT, PATCH, DELETE), each endpoint has its own automatic test. \n\nSwagger Documentation:\nThis API also has Swagger documentation, which you can access at `http://localhost:3000/api-docs`.'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ]
  },
  apis: ['server.js']
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
