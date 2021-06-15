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
                ContentType: string
            },
            link: {
                type: string
            }
                   },
    ],
    
});

const Books = mongoose.model("Books", BookSchema);
module.exports = Books;