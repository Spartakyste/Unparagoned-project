import React from 'react';

const TilePictures = () => {
    return ( 
        <article className="tile is-child notification is-warning columns">
            <div className="tile is-6 is-vertical column">
                <div className="card">
                    <div className="card-image">
                        <figure className="imageoverflow image is-4by3">
                            <img className="grow" src="https://runescape.wiki/images/thumb/6/68/Gefeliciteerd.png/300px-Gefeliciteerd.png?2bbaa"
                                alt="Placeholder"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">10 Years Deutsch community anniversary</p>
                                <p className="subtitle is-6">@runescape</p>
                            </div>
                        </div>
                        <a className="content" href="https://runescape.wiki/w/10_Year_Dutch_Community_Anniversary">
                        The 10 Year Dutch Community Anniversary is the event where 
                        the 10 year anniversary of RuneScape's Dutch community ...
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="tile is-6 column">
                <div className="card">
                    <div className="card-image">
                        <figure className="imageoverflow image is-4by3">
                            <img className="grow"
                                src="https://runescape.wiki/images/thumb/f/f4/2019_Easter_event.png/300px-2019_Easter_event.png?f448f"
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