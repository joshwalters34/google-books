import axios from "axios";
import React, { Component } from "react";  
import { Card } from 'react-bootstrap';  


class SavedBooks extends Component {
    state = {
        results: '',
    }

    componentDidMount() {
        axios.get('/api/all')
        .then(res => {
            this.setState({results: res.data });
        })
    }
  render() {
    return (  
       <div>
           <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Google Books Search</h1>
            <p className="lead">
              Saved Books
            </p>
          </div>
        </div>
       
         
             
            <div className="container">  
                <div className="row">  
                <h5>You have no saved books to display</h5>
                    {/* {this.setState.results.map(book => (  
                          
                            <Card style={{ 'marginTop': '10px' }}>  
                              <div className="row">
                                <div className="col-md-4">
                                <Card.Img variant="top" src={book.image} alt={book.title} />  
                                </div>
                                <div className="col-lg-8">
                                <Card.Body>  
                                    <h3 className="card-title">{book.title}</h3>  
                                    <h5 className="card-title">Written by: {book.authors} </h5> 
                                    <h6 className="card-title">{book.description}</h6> 
                                    <a className="btn btn-primary mx-2">Favorite</a>  
                                    <a className="btn btn-primary mx-2" href={book.link} >View Details</a>  
                                </Card.Body>  
                                </div> 
                                </div>
                            </Card>  
                         
                 ))}  */}
                </div>  
            </div>  
       </div>
    );
  }
}
  
export default SavedBooks  