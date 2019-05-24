import React from 'react';

const TilePictures = () => {
    return ( 
        <article className="tile is-child notification is-warning columns">
            <div className="tile is-6 is-vertical column">
                <div className="card">
                    <div className="card-image">
                        <figure className="imageoverflow image is-4by3">
                            <img className="grow" src="https://runescape.wiki/images/thumb/e/e9/Desperate_Times.png/1280px-Desperate_Times.png?ebe30"
                                alt="Placeholder"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">Desperate Times</p>
                                <p className="subtitle is-6">@runescape</p>
                            </div>
                        </div>
                        <a className="content" href="https://runescape.wiki/w/Desperate_Times">
                        Desperate Times is a quest featuring Seren and is a continuation of the Elder Gods quest series 
                        following on from the player's encounter with Jas during Sliske's Endgame. 
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="tile is-6 column">
                <div className="card">
                    <div className="card-image">
                        <figure className="imageoverflow image is-4by3">
                            <img className="grow"
                                src="https://runescape.wiki/images/f/f4/2019_Easter_event.png"
                                alt="Placeholder"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">2019 Easter event</p>
                                <p className="subtitle is-6">@runescape</p>
                            </div>
                        </div>
                        <a href="https://runescape.wiki/w/2019_Easter_event" className="content">
                        The Eastertime Fete (also called the Springtime Fete) is the 2019 Easter event.
                        </a>
                    </div>
                </div>
            </div>
        </article>
     );
}
 
export default TilePictures;