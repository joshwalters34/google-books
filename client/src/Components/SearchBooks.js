import React, { useState} from "react";  
import axios from 'axios';  import { Card } from 'react-bootstrap';  



function SearchBooks() {  
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
    
    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }  
    async function handleFormSubmit(event) {  
        event.preventDefault();  
        const data = await axios.get("/api/googlebooks/" + book)  
        setResult(data.data)
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
      
        <form onSubmit={handleFormSubmit}>  
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Search for a book..." type="text" />  
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
        </form> 
       </div>
    );
}
  
export default SearchBooks  