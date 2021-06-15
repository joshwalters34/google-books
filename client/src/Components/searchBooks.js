import React, { useState, Component } from "react";  
import axios from 'axios';  
import { Card } from 'react-bootstrap';  
import SearchForm from "./SearchForm";

const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`
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
                        <div className="col-sm-2">  
                            <Card style={{ 'marginTop': '10px' }}>  
  
                                <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />  
                                <Card.Body>  
                                    <h5 className="card-title">Card title</h5>  
                                    <a className="btn btn-primary">Know more</a>  
                                </Card.Body>  
                            </Card>  
                        </div>  
                    ))}  
                </div>  
            </div>  
            {/* </SearchForm> */}
        </form> 
       </div>
    );
}
  
export default SearchBooks  