import React, { Component } from 'react';
import './App.css';
import BeerTable from './Components/BeerTable.jsx'

const API = 'https://api.punkapi.com/v2/beers?page=1&per_page=80';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      beers: [],
      isLoaded: false, 
    }
    // this.data = this.data.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }


  // sortBy(key) {

  //   this.setState({
  //     data: [].sort((a,b) => {
  //       console.log(typeof parseFloat(a[key]))
  //       return parseFloat(a[key]) > parseFloat(b[key])
  //     })
  //   })
  // }

  sortBy(key){
    this.setState(prevState =>{
      console.log(key);
      this.state.data.sort((a,b) => (a.key - b.key))
    });
  }

  componentDidMount(){
    fetch(API)
      .then(response => response.json())
      .then(data => {
          this.setState({
            isLoaded: true,
            beers: data.beers,
          })
      });
  }

  render(){

    var { isLoaded, data} = this.state;
    if(!isLoaded){
      return <div>Brewing... </div>;
    }
    else{
      return(
        <div className = "App">
          <BeerTable 
          beers = {this.state.beers}
          sortBy = {this.sortBy}
          />
        </div>
       
      )
    }
  }
}

export default App;



