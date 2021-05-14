import {useEffect, useState} from "react";
import {getUserPost} from "../servis/api";
import {Link} from "react-router-dom";

export default function UserPost ({userId , url}) {
    let [post , setPost]=useState(null)
    let [flag, setFlag] = useState(false)


    useEffect(()=>{
        getUserPost().then(value => {
            setPost(value.data.filter(value => value.userId === +userId))
        setFlag(true)
        })
    },[])

  return(
      <div>
          <h1>Post</h1>
          {
              flag && <div>
                 {
                     post.map(value=>
                         <div key={value.id}><h3>{value.id}-
                             {value.title}<br/>
                             {value.body}</h3>
                            <Link to={url+'/'+userId+'/comments'}><button> comments {value.id} </button></Link>
                         </div>
                     )


                 }


             </div>
          }

      </div>
  )
}