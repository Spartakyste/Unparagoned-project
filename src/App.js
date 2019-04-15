import React, { Component } from 'react';
import './App.css';
import Timer from "./Components/Time"
import ApiItems from './Components/ApiItems';
import SearchBarItems from './Components/SearchBarItems';

class App extends Component {
  constructor(){
    super()
    this.state = { 
        item : [],
        itemSearch : "21787"
    }
}

renderApiCall(){
  const api = "http://localhost:8010/proxy/m=itemdb_rs/api/catalogue/detail.json?item="
  console.log(api)
    fetch(`${api}${this.state.itemSearch}`)
      .then(response  => response.json())
      .then(data  => {this.setState({item: data.item})});
}

  render() {
    return (
      <div className="App">
        <Timer/>
         {this.state.item.length === 0 ? <p>Wait for it</p> : <ApiItems currentItem={this.state.item}/>}
         <SearchBarItems itemID={this.state.itemSearch} method={this.renderApiCall()}/>
      </div>
    );
  }
}

export default App;
