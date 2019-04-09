import React, { Component } from 'react';
import './App.css';
import Timer from "./Components/Time"
import ApiItems from './Components/ApiItems';
import ItemButton from './Components/ItemButton';

class App extends Component {
  constructor(){
    super()
    this.state = { 
        item : ""
    }
}

getItem() {
    fetch("https://unparagoned.herokuapp.com/",{
      headers:{
        'Target-Endpoint' : "http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=21787"
      }
    }).then(response  => { 
        console.log(response)
        return response.json()
      })
      .then(data  => {
        this.setState({
          item: data[0],
        });
    });
}
  render() {
    return (
      <div className="App">
        <Timer />
        <ItemButton item={() => this.getItem()}/>
        <ApiItems selectitem={this.state.item}/>   
      </div>
    );
  }
}

export default App;
