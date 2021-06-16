const router = require("express").Router();
const Books = require("../../models/books.js");

router.get("/all", (req, res) => {
    Books.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

  router.post("/submit", (req, res) => {
    console.log(req.body);
  
    Books.insert(req.body, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
  });