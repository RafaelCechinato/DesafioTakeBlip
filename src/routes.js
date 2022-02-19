const express = require('express');
const routes = express.Router();

const GithubController = require("./controllers/GithubController");

routes.get("/github",GithubController.index);

module.exports = routes;