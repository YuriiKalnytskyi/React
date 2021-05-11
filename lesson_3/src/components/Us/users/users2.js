import {useEffect, useState} from "react";
import axiosInstans from "../../services/api";
import './users2.css'
import User2 from "../user/user2";


export default function Users2() {
    let [users , setUsers]=useState([]);
    useEffect(()=>{
        axiosInstans.get('/users').then(value =>
            setUsers([...value.data])

        );
    },[])

    let [oneUsers1 , setOneUsers ] = useState(null);
    const search1 = (id) =>{
        let find = users.find(value => value.id===id)
        setOneUsers(find)
    }

    return (
        <div className={'container'}>
            <div className={'usersContainer'}>
                {
                    users.map(value => <User2 kay={value.id} item={value} search1={search1}/>)
                }
            </div>
            <div className={'oneUsers'}>
                {
                    oneUsers1 ? (<h2>{oneUsers1.id} {oneUsers1.username}</h2>) :(<div>user is not defined</div>)

                }
            </div>

        </div>
    )
}