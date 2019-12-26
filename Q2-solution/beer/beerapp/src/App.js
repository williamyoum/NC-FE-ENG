import React, { Component } from 'react';
import './App.css';
import BeerTable from './Components/BeerTable.jsx'
import NewPage from './Components/NewPage.js'

const API = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';

class App extends Component{
  constructor(props){
    super(props);
    // state holds fetched data from API
    this.state = {
      data: [],
      // hold a boolean value for loaded API data into state
      isLoaded: false,
    }
    // bind this keyword for all functions used. 
    this.sortBy = this.sortBy.bind(this);
    this.downSortBy = this.downSortBy.bind(this);
    this.newPageCallback = this.newPageCallback.bind(this);
  }
  // ascending sort passing key as parameter
    // key holds the tag for data.$
  sortBy(key){
    const dataForSort =  this.state.data;
    dataForSort.sort((a,b) => {
      const objA = a[key];
      const objB = b[key];

      if(objA > objB) return 1;
      if(objA < objB) return -1;

      return 0;
    });
    this.setState({data: dataForSort});
    console.log(dataForSort);
  }

  // descending sort passing key as parameter
    // same thing with key
  downSortBy(key){
    const dataForSort =  this.state.data;
    dataForSort.sort((a,b) => {
      const objA = a[key];
      const objB = b[key];

      if(objA < objB) return 1;
      if(objA > objB) return -1;

      return 0;
    });
    this.setState({data: dataForSort});
  }

  newPageCallback = (dataFromChild) =>{
    // data from child for new set state
    this.setState({data: dataFromChild});
  }

  // if App renders, fetch the data from API link
    // lifecycle method: fetch + api call 
  componentDidMount(){
    fetch(API)
      // result is reponse in JSON
      .then(response => response.json())
      .then(json => {
          // set the state with the newly fetched API data aka the JSON array.
          this.setState({
            isLoaded: true,
            data: json,
          })
      });
  }

  render(){
    // if data is loaded, pass props to BeerTable.
    // if data is not loaded, state "Brewing..." aka loading data. 
        // this should not take more than a second anyway
    const {isLoaded} = this.state;
    if(!isLoaded){
      return <p>Brewing...</p>;
    }
    else{
      return(
        <div className = "App">
            <div className = "top-container">
                <div id = "beerIcon">
                    <a href = "App.js"><img src = "./favicon.ico" alt = "beer icon"></img></a>
                </div> 
                <div id = "title">
                    <h1 className = "title">Brewtopia</h1>
                </div>
            </div>
            <BeerTable 
              // pass props to BeerTable component
              data = {this.state.data}
              sortBy = {this.sortBy}
              downSortBy = {this.downSortBy}
            />
            <NewPage callbackFromParent = {this.newPageCallback}/>
            <div className = "info"><p className = "myName">@William Youm</p></div>
        </div>
      )
    }
  }
}

export default App;



