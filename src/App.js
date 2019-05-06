import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './Components/HtmlRendering/NavBar';
import ModalSignUp from './Components/HtmlRendering/ModalSignUp';
import ModalLogIn from './Components/HtmlRendering/ModalLogIn';
import Title from './Components/HtmlRendering/Title';
import Tiles from './Components/HtmlRendering/Tiles';
import Footer from './Components/HtmlRendering/Footer';
import Form from './Components/Form';

class App extends Component {
  constructor(){
    super()
    this.state = { 
        item : [],
        secondItem : [],
        thirdItem : [],
        characterInfos : [],
        inputCharacter : "Gempat"
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
};

componentDidMount(){
    const api = "http://localhost:8010/proxy/m=itemdb_rs/api/catalogue/detail.json?item=";
    const apiCharacter = `http://localhost:8011/proxy/profile/profile?user=${this.state.inputCharacter}&activities=20`;
      axios.get(`${api}31725`)
        .then(response => { this.setState({ item: response.data.item })})
        .catch(error => {console.log(error)});
      axios.get(`${api}31729`)
        .then(response => { this.setState({ secondItem: response.data.item })})
        .catch(error => {console.log(error)});
      axios.get(`${api}31733`)
        .then(response => { this.setState({ thirdItem: response.data.item })})
        .catch(error => {console.log(error)});
      axios.get(apiCharacter)
        .then(response => { this.setState({ characterInfos: response.data })})
        .catch(error => {console.log(error)});
  };
  

handleInput(event){
  this.setState({inputCharacter : event.target.value});
};


handleSubmit(event){
  event.preventDefault();
  const apiCharacter = `http://localhost:8011/proxy/profile/profile?user=${this.state.inputCharacter}&activities=20`
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
        <Title/>
        <Form handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
        <Tiles currentCharacter={this.state.characterInfos} currentItem={this.state.item} 
               secondItem={this.state.secondItem} thirdItem={this.state.thirdItem}/>
        <Footer/>
      </div>
    );
  };
};

export default App;
