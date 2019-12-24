import React, { Component } from 'react';
import './App.css';
import BeerTable from './Components/BeerTable.jsx'

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
    this.abvSortUp = this.abvSortUp.bind(this);
    this.abvSortDown = this.abvSortDown.bind(this);
    this.ibuSortUp = this.ibuSortUp.bind(this);
    this.ibuSortDown = this.ibuSortDown.bind(this);
    this.phSortUp = this.phSortUp.bind(this);
    this.phSortDown = this.phSortDown.bind(this);
  }

  // ascending sort for abv
  abvSortUp() {
    const dataForSort = this.state.data;

    dataForSort.sort((a,b) => {
      const abvA = a.abv;
      const abvB = b.abv;

      if (abvA > abvB) return 1;
      if (abvA < abvB) return -1;

      return 0;
    });
    this.setState({data: dataForSort});
  }
  // descending sort for abv
  abvSortDown() {
    const dataForSort = this.state.data;

    dataForSort.sort((a,b) => {
      const abvA = a.abv;
      const abvB = b.abv;

      if (abvA < abvB) return 1;
      if (abvA > abvB) return -1;

      return 0;
    });
    this.setState({data: dataForSort});
  }
  // ascending ibu sort
  ibuSortUp() {
    const dataForSort = this.state.data;

    dataForSort.sort((a,b) => {
      const abvA = a.ibu;
      const abvB = b.ibu;

      if (abvA > abvB) return 1;
      if (abvA < abvB) return -1;

      return 0;
    });
    this.setState({data: dataForSort});
  }
  // descending ibu
  ibuSortDown() {
    const dataForSort = this.state.data;

    dataForSort.sort((a,b) => {
      const abvA = a.ibu;
      const abvB = b.ibu;

      if (abvA < abvB) return 1;
      if (abvA > abvB) return -1;

      return 0;
    });
    this.setState({data: dataForSort});
  }
  // ascending ph level sort
  phSortUp() {
    const dataForSort = this.state.data;

    dataForSort.sort((a,b) => {
      const abvA = a.ph;
      const abvB = b.ph;

      if (abvA > abvB) return 1;
      if (abvA < abvB) return -1;

      return 0;
    });
    this.setState({data: dataForSort});
  }
  // descending ph level sort
  phSortDown() {
    const dataForSort = this.state.data;

    dataForSort.sort((a,b) => {
      const abvA = a.ph;
      const abvB = b.ph;

      if (abvA < abvB) return 1;
      if (abvA > abvB) return -1;

      return 0;
    });
    this.setState({data: dataForSort});
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
    const {data, isLoaded} = this.state;
    if(!isLoaded){
      return <div>Brewing... </div>;
    }
    else{
      return(
        <div className = "App">
          <div className = "beerIcon">
          <a href = "App.js"><img src = "./favicon.ico" alt = "beer icon"></img></a>
          </div>
          <BeerTable 
          // pass props to BeerTable component
          data = {this.state.data}
          abvSortUp = {this.abvSortUp}
          abvSortDown = {this.abvSortDown}
          ibuSortUp = {this.ibuSortUp}
          ibuSortDown = {this.ibuSortDown}
          phSortUp = {this.phSortUp}
          phSortDown = {this.phSortDown}
          />
        </div>
       
      )
    }
  }
}

export default App;



