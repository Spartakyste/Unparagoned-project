import React, { Component } from 'react';
import axios from 'axios';
import Title from './Title';
import Form from '../Form';
import Tiles from './Tiles';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [],
            secondItem: [],
            thirdItem: [],
            characterInfos: [],
            databaseCharacters: [],
            firstCharacterScoreboard : "",
            submitCharacter: "",
            isDatabaseLoaded : false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

componentDidMount(){
    const api = "http://localhost:8010/proxy/m=itemdb_rs/api/catalogue/detail.json?item=";
    const database = "http://localhost/PHP/getData.php#";
      axios.get(`${api}31725`)
        .then(response => { this.setState({ item: response.data.item })})
        .catch(error => {console.log(error)});
      axios.get(`${api}31729`)
        .then(response => { this.setState({ secondItem: response.data.item })})
        .catch(error => {console.log(error)});
      axios.get(`${api}31733`)
        .then(response => { this.setState({ thirdItem: response.data.item })})
        .catch(error => {console.log(error)});
      axios.get(database)
          .then(response => { this.setState({ databaseCharacters : response.data, firstCharacterScoreboard : response.data[0],
                                              isDatabaseLoaded : true })})
          .catch(error => {console.log(error)});
  };

componentDidUpdate(){
  {this.state.isDatabaseLoaded && 
    axios.get(`http://localhost:8011/proxy/profile/profile?user=${this.state.firstCharacterScoreboard.rs_name}&activities=20`)
      .then(response => { this.setState({ characterInfos: response.data, isDatabaseLoaded : false })})
      .catch(error => {console.log(error)})}
}
/*Handle the from from the modalSignUp component*/
  handleInput(event){
    this.setState({submitCharacter : event.target.value});
  };

  handleSubmit(event){
    event.preventDefault();
    const apiCharacter = `http://localhost:8011/proxy/profile/profile?user=${this.state.submitCharacter}&activities=20`
      axios.get(apiCharacter)
      .then(response => { this.setState({ characterInfos: response.data })})
      .catch(error => {console.log(error)});
  };

    render() { 
      console.log(this.state.props)
        return ( 
            <div>
                <Title />
                <Form handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
                <Tiles currentCharacter={this.state.characterInfos} currentItem={this.state.item}
                    secondItem={this.state.secondItem} thirdItem={this.state.thirdItem}
                    databaseCharacters={this.state.databaseCharacters} />
            </div>
         );
    }
}
 
export default Home;