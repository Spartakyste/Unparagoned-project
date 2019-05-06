import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './Components/HtmlRendering/NavBar';


const App = () => {
  return ( 
    <div className="App">
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
    </div>
   );
}
 
export default App;