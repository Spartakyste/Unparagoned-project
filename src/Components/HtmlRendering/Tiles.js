import React from 'react';
import Timer from '../Timer';
import ApiItems from '../ApiItems';

const Tiles = ({currentItem, secondItem, thirdItem}) => {
    return ( 
        <section className="columns" style={{margin:4}}>
            <article className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            <article className="tile is-child notification is-primary">
                                <p className="title">Our current competition scoreboard :</p>
                                <aside className="columns" style={{margin:0.5}}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th><abbr title="Position">Pos</abbr></th>
                                                <th>Player</th>
                                                <th><abbr title="Points">Points</abbr></th>
                                                <th><abbr title="Won">W</abbr></th>
                                                <th><abbr title="Drawn">D</abbr></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>1</th>
                                                <td><a href="" title="Leicester City F.C.">Leicester City</a>
                                                </td>
                                                <td>38</td>
                                                <td>23</td>
                                                <td>12</td>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <td><a href="" title="Arsenal F.C.">Arsenal</a></td>
                                                <td>38</td>
                                                <td>20</td>
                                                <td>11</td>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <td><a href="" title="Leicester City F.C.">Leicester City</a>
                                                </td>
                                                <td>38</td>
                                                <td>23</td>
                                                <td>12</td>
                                            </tr>
                                            <tr>
                                                <th>4</th>
                                                <td><a href="" title="Leicester City F.C.">Leicester City</a>
                                                </td>
                                                <td>38</td>
                                                <td>23</td>
                                                <td>12</td>
                                            </tr>
                                            <tr>
                                                <th>5</th>
                                                <td><a href="" title="Leicester City F.C.">Leicester City</a>
                                                </td>
                                                <td>38</td>
                                                <td>23</td>
                                                <td>12</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </aside>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
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
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-success">
                    <div>
                        <Timer/>
                        {currentItem.length === 0 || secondItem.length === 0 || thirdItem.length === 0 
                        ? <p>Wait for it</p> 
                        : <ApiItems currentItem={currentItem} secondItem = {secondItem} thirdItem={thirdItem} />}
                    </div>
                    </article>
                </div>
            </article>
        </section>
     );
}
 
export default Tiles;