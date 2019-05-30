import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Scoreboard from './Scoreboard';
import ScoreboardInfos from './ScoreboardInfos';
import CompModal from './CompModal';

const FullScoreboardPage = () => {

    const [data, setData] = useState([]);
    const [competitionData, setCompetitionData] = useState([]);
    const [actualExp, setActualExp] = useState([]);

    useEffect(() => {
        const database = "http://localhost/getData.php";
            axios.get(database)
                .then(response => {setData(response.data)})
                .catch(error => {console.log(error)});

        const currentCompetitionData = "http://localhost/getDataComp.php";
            axios.get(currentCompetitionData)
                .then(response => {setCompetitionData(response.data)})
                .catch(error => {console.log(error)});
    },[]);

    useEffect(()=> {
        for(let i = 0; i < competitionData.length ; i++){
            const characterData = `http://localhost:8011/proxy/profile/profile?user=${competitionData[i].Name}`;
            axios.get(characterData)
                // eslint-disable-next-line no-loop-func
                .then(res => { 
                    for (let j = 0; j < res.data.skillvalues.length; j++){
                    if (res.data.skillvalues[j].id == competitionData[0].ID - 1){
                        const number = res.data.skillvalues[j].xp
                    setActualExp(actualExp => [...actualExp, {expGained: (number.toFixed(number.length).slice(0, -1) - competitionData[i].starting_exp),
                                                              name : competitionData[i].Name}])}
                }})
                .catch(err => console.log(err))
            };
    }, [competitionData])

    useEffect(()=>{
        console.log(actualExp)
    },[actualExp])
    
    return (
        <div>
            <CompModal characters={data}/>
            <ScoreboardInfos characters={data}/>
            <section className="level" style={{margin:"1rem"}}>
                {actualExp.length !== 0 && <Scoreboard competitionData={competitionData} actualExp={actualExp}/>}
            </section>
        </div>
    );
}

export default FullScoreboardPage;
