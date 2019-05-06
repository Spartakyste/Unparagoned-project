import React from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import Home from './Home';
import FullScoreboardPage from './FullScoreboardPage';


const NavBar = () => {
    return ( 
        <header>
            <nav className="navbar is-link" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="">
                        <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/runescape-icon.png"/>
                    </a>

                    <a role="button" id ="burgerButton" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink to ="/" className="navbar-item">
                            Home
                        </NavLink>

                        <NavLink to ="/Scoreboard" className="navbar-item">
                            Table informations
                        </NavLink>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons field is-grouped is-grouped-centered">
                                <a className="button is-danger" id="signUp">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-outlined" id="logIn">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="" component={FullScoreboardPage}/>
            </Switch>
        </header>
     );
}
 
export default NavBar;