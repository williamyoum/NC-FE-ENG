import React, {Component} from 'react';

const API = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';

// this NewPage component is pretty much hard coded for the page after page1
    // but shows the link string can be partially replaced
    // this is a bug and will be fixed
class NewPage extends Component {
    loadNewData = () =>{
        // take the API link as a parameter, edit the ?page=$
        let nextPageAPI = API;
        // identify page
        let i = 1;
        i += 1;
        let partialString = "page=" + i;
        let newString = nextPageAPI.replace("page=1",partialString);

        // take next page data
        fetch(newString)
        // result is reponse in JSON
        .then(response => response.json())
        .then(json => {
            // use callback to send new data to parent
            this.props.callbackFromParent(json);
            })
    }
    
    // use this function just in case for simultaneous function usage for onClick of BrewMoreBeers button
    combinedFunction= () =>{
        this.loadNewData();

    }

    render(){
        return(
            <div>
                <button onClick = {this.combinedFunction} id = "newPage">Brew More Beers</button>
            </div>

        )   
    } 

}

export default NewPage;



