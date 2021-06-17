const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
   
    books: [
        {
            title: {
                type: String
            },
            authors: {
                type: String
            },
            description: {
                type: Number
            },
            image: {
                data: Buffer,
                ContentType: String
            },
            link: {
                type: String
            }
                   },
    ],
    
});

const Books = mongoose.model("Books", BookSchema);
module.exports = Books;