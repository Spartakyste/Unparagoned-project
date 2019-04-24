import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/HtmlRendering/NavBar';
import ModalSignUp from './Components/HtmlRendering/ModalSignUp';
import ModalLogIn from './Components/HtmlRendering/ModalLogIn';
import Title from './Components/HtmlRendering/Title';
import Tiles from './Components/HtmlRendering/Tiles';
import Footer from './Components/HtmlRendering/Footer';

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
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleErrors = this.handleErrors.bind(this);
};

componentDidMount(){
    const api = "http://localhost:8010/proxy/m=itemdb_rs/api/catalogue/detail.json?item="
    const apiCharacter = `http://localhost:8011/proxy/profile/profile?user=${this.state.inputCharacter}&activities=20`
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
  };
  

handleInput(event){
  this.setState({inputCharacter : event.target.value});
};

handleErrors(response) {
  console.log(response)
  if (response.error === "NO_PROFILE" || "PROFILE_PRIVATE") {
      alert("There's no such character nor they have private turned On");
  }
  return response;
}

handleSubmit(event){
  event.preventDefault();
  const apiCharacter = `http://localhost:8011/proxy/profile/profile?user=${this.state.inputCharacter}&activities=20`
  fetch(apiCharacter)
        .then(response => response.json())
        .then(this.handleErrors)
        .then(data => {this.setState({characterInfos: data})});
}

  render() {
    return (
      <div className="App">

        <NavBar/>
          <ModalSignUp/>
          <ModalLogIn/>
        <Title/>
        <section className="container titleSection">
            <div className="notification is-info">
            <form className="column" onSubmit={this.handleSubmit}>
              You can submit a name to fetch the informations :
                <label className="column" htmlFor="name">
                    <input type="text" defaultValue="" onChange={this.handleInput} required></input>
                </label>
            </form>
            </div>
        </section>
        <Tiles currentCharacter={this.state.characterInfos} currentItem={this.state.item} 
               secondItem={this.state.secondItem} thirdItem={this.state.thirdItem}/>
        <Footer/>
      </div>
    );
  };
};

export default App;
