import React, { useState, Component } from "react";  
import axios from 'axios';  import { Card } from 'react-bootstrap';  
// const router = require("express").Router();
// const Books = require("../../models/books.js");


const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`
console.log(process.env.REACT_APP_GOOGLE_API_KEY)
function SearchBooks() {  
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
  
    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }  
    function handleFormSubmit(event) {  
        event.preventDefault();  
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + API_KEY + "&maxResults=40")  
            .then(data => {  
                console.log(data.data.items);  
                setResult(data.data.items);  
            })  
    }  

    function onClick(event) {
        
            event.preventDefault();
        
        axios
            .post('/api/submit', {
                
            })
            .then(console.log("Posted succesfully"))
            .catch(error => console.log(error))
    }
    return (  
       <div>
           <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Google Books Search</h1>
            <p className="lead">
              Search for and Save Books of Interest
            </p>
          </div>
        </div>
        {/* <SearchForm> */}
        <form onSubmit={handleFormSubmit}>  
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />  
                    </div>  
                    <div className="ml-auto">  
                        <input type="submit" value="Search" className="btn btn-primary search-btn" />  
                    </div>  
                </div>  
            </div>  
            <div className="container">  
                <div className="row">  
                    {result.map(book => (  
                          
                            <Card style={{ 'marginTop': '10px' }}>  
                              <div className="row">
                                <div className="col-md-4">
                                <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />  
                                </div>
                                <div className="col-lg-8">
                                <Card.Body>  
                                    <h3 className="card-title">{book.volumeInfo.title}</h3>  
                                    <h5 className="card-title">Written by: {book.volumeInfo.authors}</h5> 
                                    <h6 className="card-title">{book.volumeInfo.description}</h6> 
                                    <a className="btn btn-primary mx-2"onClick={onClick}>Favorite</a>  
                                    <a className="btn btn-primary mx-2" href={book.volumeInfo.infoLink}>View Details</a>  
                                </Card.Body>  
                                </div> 
                                </div>
                            </Card>  
                         
                    ))}  
                </div>  
            </div>  
            {/* </SearchForm> */}
        </form> 
       </div>
    );
}
  
export default SearchBooks  