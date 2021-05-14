import {useEffect, useState} from "react";
import {getUsersJson} from "../../servises/api";
import UserJson from "../UserJson/UserJson";

export default function UsersJson () {
    let [users,setUsers]=useState([]);
    useEffect(()=>{
        getUsersJson().then(value => setUsers([...value.data]))
    },[])

    console.log(users);
  return(
      <div>
          {
              users.map(value => <UserJson key={value.id} item={value}/>)
          }

      </div>
  )
}