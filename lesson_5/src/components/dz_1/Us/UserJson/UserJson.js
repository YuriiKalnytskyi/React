import {Link} from "react-router-dom";

export default function UserJson ({item}) {
    let {id}=item;
    const part = '/usersJson/'

  return(
      <div>
          {item.name} - {item.username} - <Link to={{pathname:(part+id)}}><button>user {item.id} details</button> </Link>
      </div>
  )
}