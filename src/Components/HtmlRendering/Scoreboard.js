import React, {useState, useEffect} from 'react';
import CurrentCompetition from './CurrentCompetition';
import axios from 'axios';

const Scoreboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const database = "http://localhost/PHP/getData.php#";
        axios.get(database)
            .then(response => { setData(response.data)})
            .catch(error => {console.log(error)});
    },[]);

    return (
        <article className="level-left">
            <table className="table">
                <thead>
                    <tr>
                        <th><abbr title="Position">Pos</abbr></th>
                        <th>Team</th>
                        <th><abbr title="Played">Pld</abbr></th>
                        <th><abbr title="Won">W</abbr></th>
                        <th><abbr title="Drawn">D</abbr></th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th><abbr title="Position">Pos</abbr></th>
                        <th>Team</th>
                        <th><abbr title="Played">Pld</abbr></th>
                        <th><abbr title="Won">W</abbr></th>
                        <th><abbr title="Drawn">D</abbr></th>
                    </tr>
                </tfoot>
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
            <aside className="level-right">
                <CurrentCompetition />
            </aside>
        </article>
    );
}

export default Scoreboard;