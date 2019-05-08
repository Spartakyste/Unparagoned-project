import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TileScoreboard = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const database = "http://localhost/PHP/getData.php";
        axios.get(database)
            .then(response => { setData(response.data)})
            .catch(error => {console.log(error)});
    },[]);
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
                    {data.map((character, index) => 
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