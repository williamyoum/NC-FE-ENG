import React, {Component} from 'react';

class Search extends Component {

    findSearchType(){
        // user selects type of search from dropdown
        let searchType = "selected";
    }


    render(){
        return(
            <div>
                <input type="text" 
                       className="form-control" 
                       ref={(c) => this.title = c} 
                       name="title" 
                       placeholder = {"Search " + this.searchType}
                       />
            
            <div class="dropdown">
                <div class="dropbtn">Type</div>
                <div class="dropdown-content">
                    <a>ABV greater than</a>
                    <a href="#">IBU greater than</a>
                </div>
            </div>
            
            
            
            </div>

        )   
    } 

}

export default Search;



