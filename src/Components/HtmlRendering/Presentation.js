import React from 'react';

const Presentation = (handleInput, handleSubmit) => {
    return ( 
        <section className="container titleSection">
            <div className="notification is-info">
            <form className="column" onSubmit={() => handleSubmit}>
              You can submit a name to fetch the informations :
                <label className="column" htmlFor="name">
                    <input type="text" defaultValue="" onChange={() => handleInput} required></input>
                </label>
            </form>
            </div>
        </section>
     );
}
 
export default Presentation;