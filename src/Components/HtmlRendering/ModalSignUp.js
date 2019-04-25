import React from 'react';

const ModalSignUp = () => {
    return ( 
        <section>
            <div className="modal" id="signModal">
                <div className="modal-background"></div>
                <div className="modal-card" style={{top:10}}>
                    <header className="modal-card-head">
                        <p className="modal-card-title">We'll need some informations about you :</p>
                        <button id="buttonCloseModal" className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">

                    <div className="field">
                            <div className="control"/>
                                <input className="input" type="text" placeholder="In-game Username"/>
                            </div>
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
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Confirm your password"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Register</button>
                        <button id="modalCancelButton" className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        </section>
     );
}
 
export default ModalSignUp