import {useEffect, useState} from "react";
import Inventor from "../inventoryr/inventor";
import {getInventor} from "../../services/api";

export default function Inventorys(){
    let [inventorys , setInventorys]=useState([]);
    useEffect(()=>{
        getInventor().then(value => setInventorys([...value.data]))
    },[])
   let x= inventorys.filter(value => value.id<31)
    return(
        <div>
            {
                x.map(value => <Inventor key={value.id}
                    {...value}/>)
            }

        </div>
    );
}