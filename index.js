const express = require('express');

const supermarketRoutes = require('./routes/supermarket_routes');
const swaggerjsdoc = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');

const app = express();

app.use(express.json());

app.use('/', supermarketRoutes);

const port = 3000 || process.env.PORT;

const config = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Simple Supermarket recommendation API with Swagger",
        version: "0.1.0",
        description:
          "Simple supermarket API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Lam Nguyen",
          url: "lamtung.site",
          email: "lamnemchua@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/",
        },
      ],
    },
    apis: ["./routes/*.js"]
  };

const specs = swaggerjsdoc(config);


app.use("/api-doc/", swaggerui.serve, swaggerui.setup(specs));


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});