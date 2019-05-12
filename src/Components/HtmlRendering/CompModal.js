import React, {useState} from 'react';
import axios from 'axios';

const CompModal = ({characters}) => {

    const [modal, setModal] = useState(false);
    const [dropdownSkills, setDropdownSkills] = useState(false);
    const [dropdownLength, setDropdownLength] = useState(false);
    const [skillList, setSkillList] = useState(["Attack", "Strength", "Defence", "Ranged", "Prayer", "Magic", "Runecrafting",
                                                "Construction", "Dungeonnering", "Hitpoint", "Agility", "Herblore", "Thieving", 
                                                "Crafting", "Fletching", "Slayer", "Hunter", "Divination", "Fishing", "Cooking", 
                                                "Firemaking", "Woodcutting", "Farming", "Summoning", "Invention"])
    const [choosenSkill, setChoosenSkill] = useState(0);
    const [listOfStartingExp, setListOfStartingExp] = useState([]);
    const [finalExp, setFinalExp] = useState([])

    function startCompetition(){
        characters.map((character) => 
            axios.get(`http://localhost:8011/proxy/profile/profile?user=${character.rs_name}&activities=20`)
            .then(response => {setListOfStartingExp(response.data.skillvalues)})
            .catch(error => {console.log(error)})
        )
        for(let i = 0; i < listOfStartingExp.length; i++){
            console.log(listOfStartingExp)
            if (listOfStartingExp.{i}.id === choosenSkill)
                setFinalExp([...finalExp, listOfStartingExp.i.xp])
        }
    };


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
            <a onClick={() => setModal(!modal)} className="button is-dark">Start a new Competition !</a>
            <div className="modal" style={{ display: modal ? "block" : "none" }}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modal title</p>
                        <button onClick={() => setModal(false)} className="delete" aria-label="close"></button>
                    </header>

                    <section className="modal-card-body has-text-left">
                    <p className="title is-2">Here you can start a new competition</p>
                        {/* Replace incoming Lorem with a description of what to do for user experience */}
                        <p>Nisi ut officia eiusmod excepteur eu laboris aliquip. Nulla id sit sint incididunt in. Enim sit amet laborum ullamco.
                        Tempor anim quis voluptate laborum nostrud nisi. Elit voluptate occaecat id mollit et Lorem dolore laborum sunt incididunt in ullamco.
                         Ipsum ullamco eiusmod ea enim anim esse. Ut ad in qui in tempor officia veniam qui ex dolore sit.</p>

                        <div className={dropdownSkills ? "dropdown is-active" : "dropdown"}>
                            <div className="dropdown-trigger">
                                <button onClick={() => setDropdownSkills(!dropdownSkills)} className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Dropdown button</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                {/* Find a way to display all the skills there */}
                                {skillList.map((skill, index) => <a key={index} href="#" onClick={() => setChoosenSkill(convertSkill(skill))} 
                                    className="dropdown-item">
                                        {skill}
                                    </a>)}
                                </div>
                            </div>
                        </div>

                        <p className="title is-3">Now pick up the length of the competition</p>
                        {/* Replace incoming Lorem with a description of what to do for user experience */}
                        <p>Nisi ut officia eiusmod excepteur eu laboris aliquip. Nulla id sit sint incididunt in. Enim sit amet laborum ullamco.
                        Tempor anim quis voluptate laborum nostrud nisi. Elit voluptate occaecat id mollit et Lorem dolore laborum sunt incididunt in ullamco.
                         Ipsum ullamco eiusmod ea enim anim esse. Ut ad in qui in tempor officia veniam qui ex dolore sit.</p>
                         {/* We'll display some pre-writen times there once we'll have found a way to apply a timer to the competition */}
                         <div className={dropdownLength ? "dropdown is-active" : "dropdown"}>
                            <div className="dropdown-trigger">
                                <button onClick={() => setDropdownLength(!dropdownLength)} className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Dropdown button</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                {/* Find a way to display all the skills there */}
                                    {skillList.map((skill, index) => <a key={index} href="#" onClick={() => setChoosenSkill(skill)} 
                                    className="dropdown-item">
                                        {skill}
                                    </a>)}
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="modal-card-foot">
                        <button onClick={startCompetition} className="button is-success">Create the competition !</button>
                        <button onClick={() => setModal(false)} className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        </article>
     );
}
 
export default CompModal;