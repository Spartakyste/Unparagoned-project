import React from 'react';

const ModalSignUp = () => {

    return (
        <section>
            <div className="modal" id="signModal">
                <div className="modal-background"></div>
                <div className="modal-card" style={{ top: 10 }}>
                    <header className="modal-card-head">
                        <p className="modal-card-title">We'll need some informations about you :</p>
                        <button id="buttonCloseModal" className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <form action="http://localhost/index.php" autoComplete="off" method="post">
                                <input required className="input" type="text" name="name" placeholder="Rs Name"/>
                                <input required className="input" type="password" name="password" placeholder="Password" />
                            <footer className="modal-card-foot">
                                <input type="submit" name="submit" />
                                <button id="modalCancelButton" className="button">Cancel</button>
                            </footer>
                        </form>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default ModalSignUp