import {useEffect, useState} from "react";
import {getUsers} from "../../../../servises/api";
import User from "../User/User";

export default function Users (props) {

    let [users , setUsers]=useState([])
    let [page , setPage]=useState(1)
    useEffect(()=>{
        getUsers(page).then(value => setUsers([...value.data.data]))
    },[page])


    const dec = ()=> setPage(--page)
    const next = ()=> {
        if (page ===2){
            setPage(2)}
        else setPage(++page)
    }

    return(
      <div>
          {
              users.map(value=><User key={value.id} {...value} />)
          }
          <button onClick={dec}>dec</button>
          <button onClick={next}>next</button>



        
      </div>
  );
}