import React, {useState} from 'react';
import Scoreboard from './Scoreboard';
import ScoreboardInfos from './ScoreboardInfos';
import CompModal from './CompModal';

const FullScoreboardPage = () => {

    const [data, setData] = useState([]);
    const [tempScoreboard, setTempScoreboard] = useState(["Gempat", "Spartakyste"]);

/*    tempScoreboard will be replaced by the data from a database with the code above

    useEffect(() => {
        const database = "http://localhost/PHP/getData.php";
        axios.get(database)
            .then(response => { setData(response.data)})
            .catch(error => {console.log(error)});
    },[]);*/
    return (
        <div>
            <CompModal characters={data}/>
            <ScoreboardInfos/>
            <section className="level" style={{margin:"1rem"}}>
                <Scoreboard characters={tempScoreboard}/>
            </section>
        </div>
    );
}

export default FullScoreboardPage;