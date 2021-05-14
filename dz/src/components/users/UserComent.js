import {useEffect, useState} from "react";
import {getUserComent} from "../servis/api";

export default function UserComent ({userId}) {
    let [comments  , setComments]=useState(null)
    let [flag  , setFlag]=useState(false)

    useEffect(()=>{
        getUserComent().then(value => setComments(value.data.filter(value=>value.postId === +userId)))
        setFlag(true)
    },[])
    console.log(comments)

    return(
        <div>
            <h1>Comments</h1>

            {
                flag && <div>
                    {
                       comments&& comments.map(value=>
                            <div key={value.id}><h3>{value.id} - {value.name}<br/>
                                {value.email}<br/>
                                {value.body}</h3>
                            </div>)
                    }
                </div>
            }
        </div>
    )
  }
