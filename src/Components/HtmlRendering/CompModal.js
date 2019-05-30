/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CompModal = ({characters}) => {

    const [modal, setModal] = useState(false);
    const [dropdownSkills, setDropdownSkills] = useState(false);
    const [dropdownLength, setDropdownLength] = useState(false);

    const [skillList, setSkillList] = useState([]);
    const [choosenSkill, setChoosenSkill] = useState({skill : "", skillId : 0});
    const [competitionLength, setCompetitionLength] = useState([1, 3, 7]);
    const [choosenLength, setChoosenLength] = useState(0);

    const [listOfStartingExp, setListOfStartingExp] = useState([]);

    // Start when the user click on the Start competition button
    function startCompetition(count) {
        //Get an api call for every player registered,
       axios.get(`http://localhost:8011/proxy/profile/profile?user=${characters[count].Name}`)
            .then(response => {
                count++
                //Navigate through the response to pick up the xp value of the skill choosen,
                for ( let i = 0; i < response.data.skillvalues.length; i++){
                    if(response.data.skillvalues[i].id === choosenSkill.skillId){
                        const number = response.data.skillvalues[i].xp
                //And put it inside an array with the player name.
                        setListOfStartingExp(listOfStartingExp => 
                            [...listOfStartingExp, [response.data.name, number.toFixed(number.length).slice(0, -1)]])
                    } 
                }
                //Recursive call to make it happen for all players in one click.
                if (count < characters.length) {
                    startCompetition(count)
                } 
            })
            .catch(error => { console.log(error) });
    };


    useEffect(()=> {
        axios.get('http://localhost/getSkill.php')
             .then(res => {setSkillList(res.data)})
             .catch(error => {console.log(error)} )
        if (listOfStartingExp.length) {
            axios.post('http://localhost/competition.php', {exp : listOfStartingExp, skill : choosenSkill.skill, choosenLength})
                .then (res => {console.log(res.config.data)})
                .catch(error => {console.log(error)})}
    },[listOfStartingExp.length === characters.length])


    return ( 
        <article>
            <a onClick={() => setModal(!modal)} className="button is-white is-outlined has-text-black" style={{marginTop : "1rem"}}>
            Start a new Competition !</a>

            <div className="modal" style={{ display: modal ? "block" : "none", padding:"2rem" }}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Competition settings</p>
                        <button onClick={() => setModal(false)} className="delete" aria-label="close"></button>
                    </header>

                    <section className="modal-card-body has-text-left">
                    <p className="title is-2">Here you can start a new competition</p>
                        <p className="title is-5">
                            The competition system will pick up every player registered in the database, then register the current amount of experience
                             obtained in the skill that will be choose after. The system will calculate the amount of experience gained by substracting
                             the current amount of experience by the amount saved at the creation of the competition.
                        </p>
                        <p>Click on the button below to display all the Runescape skills, then pick one to select in wich skill
                            you want to start the competition in.
                        </p>

                        <div className={dropdownSkills ? "dropdown is-active" : "dropdown"} style={{margin:"1rem"}}>
                            <div className="dropdown-trigger">
                                <button onClick={() => setDropdownSkills(!dropdownSkills)} className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Choose one</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                {skillList.length !== 0 ?
                                 skillList.map((skill, index) => <a key={index} href="#" onClick={() => setChoosenSkill({skill : skill.NAME, skillId : skill.ID - 1})} 
                                    className="dropdown-item">
                                        {skill.NAME}
                                    </a>)
                                    : <p>Wait</p>}
                                </div>
                            </div>
                        </div>

                        <p className="title is-3">Now pick up the length of the competition</p>
                        <p>There you'll have to pick up a length for the competition, there will be x choices.
                            The result will be published after the competition is done.
                        </p>
                         {/* We'll display some pre-writen times there once we'll have found a way to apply a timer to the competition */}
                         <div className={dropdownLength ? "dropdown is-active" : "dropdown"} style={{marginTop:"1rem", marginLeft:"1rem", marginRight:"1rem"}}>
                            <div className="dropdown-trigger">
                                <button onClick={() => setDropdownLength(!dropdownLength)} className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Pick the length</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                {competitionLength.length !== 0 ?
                                 competitionLength.map((length, index) => <a key={index} href="#" onClick={() => setChoosenLength(length)} 
                                    className="dropdown-item">
                                        {length}
                                    </a>)
                                    : <p>Wait</p>}
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="modal-card-foot">
                        <button onClick={() => startCompetition(0)} className="button is-success">Create the competition !</button>
                        <button onClick={() => setModal(false)} className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        </article>
     );
}
 
export default CompModal;
