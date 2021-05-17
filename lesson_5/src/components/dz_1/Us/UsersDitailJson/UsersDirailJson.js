import {useEffect, useState} from "react";
import {getUsersDetalJson} from "../../servises/api";
import { Link,} from "react-router-dom";


export default function UsersDirailJson (props) {
    const {id}=props
    let [userDetail , setUserDetail] = useState(null)
    useEffect(()=>{
        getUsersDetalJson(id).then(value => setUserDetail({...value.data}))
    },[id])
    console.log(userDetail);


    return(
      <div>
          {
              userDetail&& <div>
                  {userDetail.id}-{userDetail.name}-{userDetail.username}
                  <br/>
                  {userDetail.address.street}-{userDetail.address.city}
                  <br/>
                  {userDetail.phone}
                  <br/>
                  {userDetail.company.name}-{userDetail.company.catchPhrase}

                  {/*<Link to={'/usersJson/'+id+'/post'}>post</Link>*/}
              </div>
          }

      </div>
  )
}