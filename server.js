const express = require("express");
const next = require("next");
var bodyParser = require("body-parser");
var userController = require("./controllers/userController");
var adminController = require("./controllers/adminController");

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get("/services/:location", (req, res) => {
      const actualPage = "/services";
      const queryParams = { location: req.params.location };
      app.render(req, res, actualPage, queryParams);
    });

    // firing the userController
    userController(server);

    // firing the adminController
    adminController(server);

    server.get("/admin-chat/:code", (req, res) => {
      const actualPage = "/admin-chat";
      const queryParams = {
        code: req.params.code
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
