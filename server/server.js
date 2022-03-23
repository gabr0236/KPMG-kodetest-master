const express = require("express");
const app = express(); //For api
var cors = require("cors"); //Relax security
app.use(cors());

//Data should eventually be retrieved from a database
const notes = require("./mock-notes.json");
const users = require("./mock-users.json");

//Paginate notes and send request
app.get("/notes", paginatedResults(notes), (req, res) => {
  res.json(res.paginatedResults);
});

//Paginate users and send request
app.get("/users", paginatedResults(users), (req, res) => {
  res.json(res.paginatedResults);
});

//Generic reusable middleware for pagination
function paginatedResults(data) {
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {}; //Object wrapper

    if (endIndex < data.length) {
      //Make sure to only display next if exists
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      //Make sure to only display previous if exists
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    results.results = data.slice(startIndex, endIndex); //Get from inbetween start and end index

    res.paginatedResults = results;
    next(); //Move on to next parameter
  };
}

app.listen(6500);
