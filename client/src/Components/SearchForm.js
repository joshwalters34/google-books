import React from "react";

function SearchForm(props) {
  
  return (
    <form onSubmit={props.handleFormSubmit}>  
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input onChange={props.handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />  
                    </div>  
                    <div className="ml-auto">  
                        <input type="submit" value="Search" className="btn btn-primary search-btn" />  
                    </div>  
                </div>  
            </div>  
          </form>
    //  <form onSubmit={props.handleFormSubmit}>
    //    <div className="form-group">
    //     <label htmlFor="search">Search:</label>
    //      <input 
    //       onChange={props.handleInputChange}
    //       value={props.search}
    //       name="search"
    //       type="text"
    //       className="form-control"
    //       placeholder="Search For a Book"
    //       id="search"
    //     />
        
    //     <br />
    //     <button type="submit" className="btn btn-primary">
    //       Search
    //     </button>
    //   </div>
    // </form>
  );
}

export default SearchForm;
