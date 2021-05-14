import {Link} from "react-router-dom";


export default function User ({item} ) {
    let {id}=item

  return(
      <div>
          {item.name}{item.username} <Link to={'/users/'+id}><button> user {id}detail</button></Link>

      </div>
  )
}