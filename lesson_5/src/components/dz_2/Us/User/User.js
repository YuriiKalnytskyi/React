import {Link} from "react-router-dom";

export default function User (props) {
    let {id , first_name ,last_name}=props;
    let part = '/users/';
  return(
      <div>
          {id} - {first_name} - {last_name}
          <Link to={{pathname:(part+id)}}> <button>user {id} details</button> </Link>


      </div>
  )
}