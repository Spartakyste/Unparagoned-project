import React from 'react';
import CurrentCompetition from './CurrentCompetition';

const Scoreboard = ({characters}) => {

    return (
        <article className="level-left">
            <table className="table">
                <thead>
                    <tr>
                        <th><abbr title="Position">Pos</abbr></th>
                        <th>Player</th>
                        <th><abbr title="Exp gained">Exp</abbr></th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th><abbr title="Position">Pos</abbr></th>
                        <th>Player</th>
                        <th><abbr title="Exp gained">Exp</abbr></th>
                    </tr>
                </tfoot>
                <tbody>
                    {characters.length !== 0 ? characters.map((character, index) => 
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>
                                <a href="">{character.region}</a>
                            </td>
                            {/* Link that from the math done with the exp actual - exp stocked in MySQL */}
                            <td>{character.job}</td>
                        </tr>
                       )
                    : <p>Wait</p>}
                </tbody>
            </table>
            <aside className="level-right">
                <CurrentCompetition />
            </aside>
        </article>
    );
}

export default Scoreboard;