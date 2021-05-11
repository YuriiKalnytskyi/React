import {useEffect, useState} from "react";
import User from "../user/user";
import './users.css'


export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
                console.log(value)
            });
    }, [])

    let [oneUsers, setOneUsers]=useState(null)
    const search =(id)=>{
        let find =users.find(value => value.id===id)
setOneUsers(find)
    }

    return (
        <div className={'container'}>
            <div className={'usersСontainer'}>
                {
                    users.map(value => <User kay={value.id} item={value} search={search}/>)
                }
            </div>

            <div className={'oneUsers'}>
                {
                    oneUsers ? (<h2>{oneUsers.id} {oneUsers.username}</h2>) :(<div>user is not defined</div>)
                }

            </div>
        </div>
    );
}