import React from 'react';

const TileScoreboard = ({characterFromDatabase}) => {
    return ( 
        <article className="tile is-child notification is-primary">
            <aside className="table-container" style={{margin:0.5}}>
            <p className="scoreboardTitle">Our current competition scoreboard</p>
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
                    {characterFromDatabase.map((character, index) => 
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td><a href="">{character.rs_name}</a>
                            </td>
                            <td>38</td>
                            <td>23</td>
                            <td>12</td>
                        </tr>
                       )}
                </tbody>
                </table>
            </aside>
        </article>
     );
}
 
export default TileScoreboard;