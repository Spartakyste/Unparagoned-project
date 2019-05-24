import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Scoreboard from './Scoreboard';
import ScoreboardInfos from './ScoreboardInfos';
import CompModal from './CompModal';

const FullScoreboardPage = () => {

    const [data, setData] = useState([]);
    const [competitionData, setCompetitionData] = useState([]);

    useEffect(() => {
        const database = "http://localhost/getData.php";
        axios.get(database)
            .then(response => { setData(response.data)})
            .catch(error => {console.log(error)});
        const currentCompetitionData = "http://localhost/getDataComp.php";
            axios.get(currentCompetitionData)
                .then(response => { setCompetitionData(response.data)})
                .catch(error => {console.log(error)});
    },[]);
    
    return (
        <div>
            <CompModal characters={data}/>
            <ScoreboardInfos characters={data}/>
            <section className="level" style={{margin:"1rem"}}>
                <Scoreboard characters={competitionData}/>
            </section>
        </div>
    );
}

export default FullScoreboardPage;