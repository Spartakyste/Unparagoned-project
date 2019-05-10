import React from 'react';
import Scoreboard from './Scoreboard';
import ScoreboardInfos from './ScoreboardInfos';
import CompModal from './CompModal';

const FullScoreboardPage = () => {
    return (
        <div>
            <CompModal/>
            <ScoreboardInfos/>
            <section className="level" style={{margin:"1rem"}}>
                <Scoreboard />
            </section>
        </div>
    );
}

export default FullScoreboardPage;