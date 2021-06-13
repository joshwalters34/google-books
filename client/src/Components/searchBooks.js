import React, { useState } from "react";  
import axios from 'axios';  
import { Card } from 'react-bootstrap';  
function searchBooks() {  
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
    const [apiKey, setApiKey] = useState("AIzaSyBntWmggEQ9gGzrv-mC4t5QFYSsKsyo4uY")  
  
    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }  
    function handleSubmit(event) {  
        event.preventDefault();  
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")  
            .then(data => {  
                console.log(data.data.items);  
                setResult(data.data.items);  
            })  
    }  
    return (  
       <div>
           {/* need to add mapping code */}
       </div>
    );
}
  
export default searchBooks  