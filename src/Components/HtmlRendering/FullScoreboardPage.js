import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Scoreboard from './Scoreboard';
import ScoreboardInfos from './ScoreboardInfos';
import CompModal from './CompModal';

const FullScoreboardPage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const database = "http://localhost/PHP/getData.php";
        axios.get(database)
            .then(response => { setData(response.data)})
            .catch(error => {console.log(error)});
    },[]);
    return (
        <div>
            <CompModal characters={data}/>
            <ScoreboardInfos/>
            <section className="level" style={{margin:"1rem"}}>
                <Scoreboard characters={data}/>
            </section>
        </div>
    );
}

export default FullScoreboardPage;