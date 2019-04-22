import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/HtmlRendering/NavBar';
import ModalSignUp from './Components/HtmlRendering/ModalSignUp';
import ModalLogIn from './Components/HtmlRendering/ModalLogIn';
import Title from './Components/HtmlRendering/Title';
import Presentation from './Components/HtmlRendering/Presentation';
import Tiles from './Components/HtmlRendering/Tiles';
import Footer from './Components/HtmlRendering/Footer';

class App extends Component {
  constructor(){
    super()
    this.state = { 
        item : [],
        secondItem : [],
        thirdItem : [],
        characterInfos : []
    }
}

componentDidMount(){
    const api = "http://localhost:8010/proxy/m=itemdb_rs/api/catalogue/detail.json?item="
    const apiCharacter = "https://apps;runescape.com/runemetrics/profile/profile?user=Gempat&activities=20"
      fetch(`${api}31725`)
        .then(response  => response.json())
        .then(data  => {this.setState({item: data.item})});
      fetch(`${api}31729`)
        .then(response  => response.json())
        .then(data  => {this.setState({secondItem: data.item})});
      fetch(`${api}31733`)
        .then(response  => response.json())
        .then(data  => {this.setState({thirdItem: data.item})});
      fetch(apiCharacter)
        .then(response => response.json())
        .then(data => {this.setState({characterInfos: data})});
  }



  render() {
    return (
      <div className="App">
        <NavBar/>
          <ModalSignUp/>
          <ModalLogIn/>
        <Title />
        <Presentation/>
        <Tiles currentCharacter={this.state.characterInfos} currentItem={this.state.item} 
               secondItem={this.state.secondItem} thirdItem={this.state.thirdItem}/>
        <Footer/>
      </div>
    );
  };
};

export default App;
