/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CompModal = ({characters}) => {

    const [modal, setModal] = useState(false);
    const [dropdownSkills, setDropdownSkills] = useState(false);
    const [dropdownLength, setDropdownLength] = useState(false);
    const [skillList, setSkillList] = useState(["Attack", "Strength", "Defence", "Ranged", "Prayer", "Magic", "Runecrafting",
                                                "Construction", "Dungeonnering", "Hitpoint", "Agility", "Herblore", "Thieving", 
                                                "Crafting", "Fletching", "Slayer", "Hunter", "Divination", "Fishing", "Cooking", 
                                                "Firemaking", "Woodcutting", "Farming", "Summoning", "Invention"])
    const [choosenSkill, setChoosenSkill] = useState({skill : "", skillId : 0});
    const [listOfStartingExp, setListOfStartingExp] = useState([]);
    const [finalExp, setFinalExp] = useState([])

    // Start when the user click on the Start competition button
    function startCompetition(count) {
        //Get an api call for every player registered,
       axios.get(`http://localhost:8011/proxy/profile/profile?user=${characters[count].name}`)
            .then(response => {
                count++
                //Navigate through the response to pick up the xp value of the skill choosen,
                for ( let i = 0; i < response.data.skillvalues.length; i++){
                    if(response.data.skillvalues[i].id === choosenSkill){
                //And put it inside an array with the player name.
                        setListOfStartingExp(listOfStartingExp => 
                            [...listOfStartingExp, [response.data.name, response.data.skillvalues[i].xp]])
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
        if (listOfStartingExp.length) {
            axios.post('http://localhost/competition.php', {exp : listOfStartingExp})
                .then (res => {console.log(res.config.data)})
                .catch(error => {console.log(error)})}
    },[listOfStartingExp.length === characters.length])
            
            

    //Switch to convert into number because skill are identified as 'id' in the api response.
    const convertSkill = (skillString) => {
        switch(skillString){
            case("Invention") : skillString = 26 ;
            break;
            case("Magic") : skillString = 6 ;
            break;
            case("Constitution") : skillString = 3 ;
            break;
            case("Slayer") : skillString = 18
            break;
            case("Ranged") : skillString =  4
            break;
            case("Attack") : skillString = 0
            break;
            case("Mining") : skillString = 14
            break;
            case("Dungeonnering") : skillString = 24
            break;
            case("Defence") : skillString = 1
            break;
            case("Herblore") : skillString = 15
            break;
            case("Summoning") : skillString = 23
            break;
            case("Fishing") : skillString = 10
            break;
            case("Woodcutting") : skillString = 8
            break;
            case("Farming") : skillString = 19
            break;
            case("Cooking") : skillString = 7
            break;
            case("Firemaking") : skillString = 11
            break;
            case("Thieving") : skillString = 17
            break;
            case("Strength") : skillString = 2
            break;
            case("Crafting") : skillString = 12
            break;
            case("Fletching") : skillString = 9
            break;
            case("Construction") : skillString = 22
            break;
            case("Hunter") : skillString =  21
            break;
            case("Smithing") : skillString = 13
            break;
            case("Prayer") : skillString = 5
            break;
            case("Agility") : skillString = 16
            break;
            case("Divination") : skillString = 25
            break;
            case("Runecrafting") : skillString = 20
            break;
            default:
        }
        return skillString;
        
    };


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
                                {skillList.map((skill, index) => <a key={index} href="#" onClick={() => setChoosenSkill(convertSkill(skill))} 
                                    className="dropdown-item">
                                        {skill}
                                    </a>)}
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
                                     <a href="#" className="dropdown-item"> 1 day </a>
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