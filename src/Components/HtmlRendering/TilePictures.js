import React from 'react';

const TilePictures = () => {
    return ( 
        <article className="tile is-child notification is-danger columns">
            <div className="tile is-6 is-vertical column">
                <div className="card">
                    <div className="card-image">
                        <figure className="imageoverflow image is-4by3">
                            <img className="grow" src="https://runescape.wiki/images/thumb/3/34/Incense_sticks_frontpage_banner.png/300px-Incense_sticks_frontpage_banner.png?f245f"
                                alt="Placeholder"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">John Smith</p>
                                <p className="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris.
                            <br></br>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tile is-6 column">
                <div className="card">
                    <div className="card-image">
                        <figure className="imageoverflow image is-4by3">
                            <img className="grow"
                                src="https://runescape.wiki/images/5/5d/Curse_of_the_Black_Stone.png?e1710"
                                alt="Placeholder"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">John Smith</p>
                                <p className="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris.
                            <br></br>
                            <time dateTime="2019-3-21">11:09 PM - 21 March 2019</time>
                        </div>
                    </div>
                </div>
            </div>
        </article>
     );
}
 
export default TilePictures;