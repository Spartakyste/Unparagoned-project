import React from 'react';

const Presentation = (handleInput, handleSubmit) => {
    return ( 
        <section className="container is-fluid titleSection">
            <div className="notification is-info">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name :
                    <input type="text" defaultValue="Gempat" onChange={handleInput}></input>
                </label>
            </form>
            </div>
        </section>
     );
}
 
export default Presentation;