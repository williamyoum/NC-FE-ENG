import React, { Component } from 'react';
import './App.css';
import BeerTable from './Components/BeerTable.jsx'

const API = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isLoaded: false, 
    }
    // this.data = this.data.bind(this);
    this.abvSortUp = this.abvSortUp.bind(this);
    this.abvSortDown = this.abvSortDown.bind(this);
    this.ibuSortUp = this.ibuSortUp.bind(this);
    this.ibuSortDown = this.ibuSortDown.bind(this);
    this.phSortUp = this.phSortUp.bind(this);
    this.phSortDown = this.phSortDown.bind(this);
  }

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

  componentDidMount(){
    fetch(API)
      .then(response => response.json())
      .then(json => {
          this.setState({
            isLoaded: true,
            data: json,
          })
      });
  }

  render(){

    const {data, isLoaded} = this.state;
    if(!isLoaded){
      return <div>Brewing... </div>;
    }
    else{
      return(
        <div className = "App">
          <BeerTable 
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



