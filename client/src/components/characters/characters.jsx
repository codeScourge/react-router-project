import React from "react";
import { Outlet, useLoaderData } from "react-router";
import { useSearchParams, Link } from "react-router-dom";

const charactersStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    }

function Character({name, type}) {
    const [params, setParams] = useSearchParams();
    const charStyle = type == "jedi" ? {backgroundColor: "#AEC6CF"} : type == "sith" ? {backgroundColor: "#ff6961"} : {backgroundColor: "#77DD77"}

    return  <div key={name} id={name} className="characters__character" style={charStyle}>
                <Link className="characters__character__text" to={name} >{name}</Link>
            </div>
}

export function CharacterChooser() {
    const [params, setParams] = useSearchParams();
    const filter = params.get("type");

    const toggleParams = (toggleType) => {
        {if (params.get("type") == toggleType) {setParams("")} else {setParams("type="+toggleType)}};
    }

    const filterJedi = () => {toggleParams("jedi")};
    const filterSith = () => {toggleParams("sith")};
    const filterDroid = () => {toggleParams("droid")};

    const allCharacters = useLoaderData();
    let charactersArray;

    if (filter) {
        charactersArray = allCharacters.characters.filter(({name, type}) => type == filter ? true : false)
    } else {
        charactersArray = allCharacters.characters;
    };

    return  <div>
                <div className="nav">
                    <div className="nav__links">
                        <button className="nav__links__link" onClick={filterJedi} style={{backgroundColor: params.get("type") == "jedi" ? "#AEC6CF" : "#F7F7F7"}}>Jedi</button>
                        <button className="nav__links__link" onClick={filterSith} style={{backgroundColor: params.get("type") == "sith" ? "#ff6961" : "#F7F7F7"}}>Sith</button>
                        <button className="nav__links__link" onClick={filterDroid} style={{backgroundColor: params.get("type") == "droid" ? "#77DD77" : "#F7F7F7"}}>Droid</button>
                    </div>
                </div>

                <div style={charactersStyle}>
                    {charactersArray.map(({name, type}) => {
                        return <Character name={name} type={type}/>
                    })}
                </div>
            </div>
}


export default function Characters() {
    return  <div>
                <h1>This is always shown</h1>
                <Outlet/>
            </div>
}
