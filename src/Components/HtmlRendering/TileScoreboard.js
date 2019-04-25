import React from 'react';
import CharacterInfos from '../CharacterInfos';

const TileScoreboard = ({currentCharacter}) => {
    return ( 
        <article className="tile columns is-child notification is-primary tableWrapper">
            <aside className="column is-7 table-container" style={{margin:0.5}}>
            <p className="scoreboardTitle">Our current competition scoreboard :</p>
                <table className="table is-fullwidth">
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
                            <td><a href="">Gempat</a>
                            </td>
                            <td>38</td>
                            <td>23</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td><a href="">Chronicius</a></td>
                            <td>32</td>
                            <td>20</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td><a href="">William</a>
                            </td>
                            <td>28</td>
                            <td>23</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td><a href="">Josh</a>
                            </td>
                            <td>20</td>
                            <td>23</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td><a href="">Spartakyste</a>
                            </td>
                            <td>8</td>
                            <td>23</td>
                            <td>12</td>
                        </tr>
                    </tbody>
                </table>
            </aside>
            {currentCharacter.length === 0 ? <div className="loader"></div> 
        : <CharacterInfos className="column is-5" currentCharacter={currentCharacter} />}
        </article>
     );
}
 
export default TileScoreboard;