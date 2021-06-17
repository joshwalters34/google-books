const router = require("express").Router();
const Books = require("../../models/book.js");
const axios = require('axios');

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

router.get("/googlebooks/:book", (req, res) => {
  console.log(process.env.GOOGLE_API_KEY, "env");
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.book + "&key=" + process.env.GOOGLE_API_KEY + "&maxResults=5")
    .then(data => {
      res.json(data.data.items)
    })  
})

  module.exports = router;