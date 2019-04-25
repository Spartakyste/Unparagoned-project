import React from 'react';

const ModalLogIn = () => {
    return ( 
        <section>
            <div className="modal" id="logInModal">
                <div className="modal-background"></div>
                <div className="modal-card"  style={{top:10}}>
                    <header className="modal-card-head">
                        <p className="modal-card-title">Enter your informations :</p>
                        <button id="buttonCloseLogInModal" className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" type="email" placeholder="Email"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Password"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Log in</button>
                        <button id="modalLogInCancelButton" className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        </section>
     );
}
 
export default ModalLogIn;