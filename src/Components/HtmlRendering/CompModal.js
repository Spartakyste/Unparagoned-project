import React, {useState} from 'react';

const CompModal = () => {

    const [modal, setModal] = useState(false);
    const [dropdownSkills, setDropdownSkills] = useState(false);
    const [dropdownLength, setDropdownLength] = useState(false);

    return ( 
        <article>
            <a onClick={() => setModal(!modal)} className="button is-dark">Start a new Competition !</a>
            <div className="modal" style={{ display: modal ? "block" : "none" }}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modal title</p>
                        <button onClick={() => setModal(false)} className="delete" aria-label="close"></button>
                    </header>

                    <section className="modal-card-body has-text-left">
                    <p className="title is-2">Here you can start a new competition</p>
                        {/* Replace incoming Lorem with a description of what to do for user experience */}
                        <p>Nisi ut officia eiusmod excepteur eu laboris aliquip. Nulla id sit sint incididunt in. Enim sit amet laborum ullamco.
                        Tempor anim quis voluptate laborum nostrud nisi. Elit voluptate occaecat id mollit et Lorem dolore laborum sunt incididunt in ullamco.
                         Ipsum ullamco eiusmod ea enim anim esse. Ut ad in qui in tempor officia veniam qui ex dolore sit.</p>

                        <div className={dropdownSkills ? "dropdown is-active" : "dropdown"}>
                            <div className="dropdown-trigger">
                                <button onClick={() => setDropdownSkills(!dropdownSkills)} className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Dropdown button</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                {/* Find a way to display all the skills there */}
                                    <a href="#" className="dropdown-item">
                                        Dropdown item
                                     </a>
                                </div>
                            </div>
                        </div>

                        <p className="title is-3">Now pick up the length of the competition</p>
                        {/* Replace incoming Lorem with a description of what to do for user experience */}
                        <p>Nisi ut officia eiusmod excepteur eu laboris aliquip. Nulla id sit sint incididunt in. Enim sit amet laborum ullamco.
                        Tempor anim quis voluptate laborum nostrud nisi. Elit voluptate occaecat id mollit et Lorem dolore laborum sunt incididunt in ullamco.
                         Ipsum ullamco eiusmod ea enim anim esse. Ut ad in qui in tempor officia veniam qui ex dolore sit.</p>
                         {/* We'll display some pre-writen times there once we'll have found a way to apply a timer to the competition */}
                         <div className={dropdownLength ? "dropdown is-active" : "dropdown"}>
                            <div className="dropdown-trigger">
                                <button onClick={() => setDropdownLength(!dropdownLength)} className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Dropdown button</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                {/* Find a way to display all the skills there */}
                                    <a href="#" className="dropdown-item">
                                        Dropdown item
                                     </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="modal-card-foot">
                        <button className="button is-success">Create the competition !</button>
                        <button onClick={() => setModal(false)} className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        </article>
     );
}
 
export default CompModal;