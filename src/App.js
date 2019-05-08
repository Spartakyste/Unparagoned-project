import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './Components/HtmlRendering/NavBar';
import ModalSignUp from './Components/HtmlRendering/ModalSignUp';
import ModalLogIn from './Components/HtmlRendering/ModalLogIn';
import Footer from './Components/HtmlRendering/Footer'


const App = () => {
  return ( 
    <div className="App">
    <BrowserRouter>
      <NavBar/>
        <ModalSignUp />
        <ModalLogIn />
        <Footer />
    </BrowserRouter>
    </div>
   );
}
 
export default App;