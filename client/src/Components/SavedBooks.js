import axios from "axios";
import React, { useState, Component } from "react";  
import { Card } from 'react-bootstrap';  


class SavedBooks extends Component {
    state = {
        results,
    }

    componentDidMount() {
        axios.get(/api/all)
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
       
        <form>  
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input className="AutoFocus form-control" placeholder="Type something..." type="text" />  
                    </div>  
                    <div className="ml-auto">  
                        <input type="submit" value="Search" className="btn btn-primary search-btn" />  
                    </div>  
                </div>  
            </div>  
            <div className="container">  
                <div className="row">  
                    {this.state.results.map(book => (  
                          
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
                         
                 ))} 
                </div>  
            </div>  
            {/* </SearchForm> */}
        </form> 
       </div>
    );
  }
}
  
export default SavedBooks  