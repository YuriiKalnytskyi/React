import {useEffect, useState} from "react";
import {getUsersDetail} from "../servis/api";
import {Link} from "react-router-dom";


export default function UsersDetali (props) {
    let {id}=props

    let [userDetail , setUserDetail]=useState(null)
    useEffect(()=>{
        getUsersDetail(id).then(value => setUserDetail({...value.data}))
    },[id])
    console.log(userDetail)

  return(
      <div>
          {
              userDetail &&<div> <h1>Detail</h1>
                  {userDetail.id}-{userDetail.name}-{userDetail.username}
                  <br/>
                  {userDetail.address.street}-{userDetail.address.city}
                  <br/>
                  {userDetail.phone}
                  <br/>
                  {userDetail.company.name}-{userDetail.company.catchPhrase}
                  <Link to={'/users/'+id+'/post'}><button>user {id} post </button></Link>
              </div>
          }
        
      </div>
  )
}