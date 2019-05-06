import React from 'react';
import Scoreboard from './Scoreboard';
import ScoreboardInfos from './ScoreboardInfos';

const FullScoreboardPage = () => {
    return (
        <div>
            <ScoreboardInfos/>
            <section className="level" style={{margin:"1rem"}}>
                <Scoreboard />
            </section>
        </div>
    );
}

export default FullScoreboardPage;