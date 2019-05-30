import React from 'react';
import CurrentCompetition from './CurrentCompetition';

const Scoreboard = ({actualExp, competitionData}) => {
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
                    {actualExp.length !== 0 ? actualExp.map((character, index) => 
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>
                                <a href="">{character.name}</a>
                            </td>
                            {/* Link that from the math done with the exp actual - exp stocked in MySQL */}
                            <td style={{color : character.expGained === 0 ? "red" : "green"}}>
                                {character.expGained}
                            </td>
                        </tr>
                       )
                    : <p>Wait</p>}
                </tbody>
            </table>
            <aside className="level-right">
                {competitionData.length !== 0 &&
                <CurrentCompetition currentSkill={competitionData[0].Skill} />}
            </aside>
        </article>
    );
}

export default Scoreboard;
