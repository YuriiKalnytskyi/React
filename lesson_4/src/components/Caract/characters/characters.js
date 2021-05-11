import  {getCharacters} from "../../services/api";
import {useEffect, useState} from "react";
import Character from "../character/character";

export default function Characters(){
    let [characters,setCharacters ]=useState([]);
    useEffect(()=>{
        getCharacters().then (value =>setCharacters([...value.data] ));
    },[])
    let x = characters.filter(value => value.id<10)

    return (
        <div>
            {
                x.map(value => <Character key={value.id}
                    {...value}
                />)
            }

        </div>
    );
}