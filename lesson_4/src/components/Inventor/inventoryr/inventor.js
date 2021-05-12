import {Link} from "react-router-dom";

export default function Inventor(props){
    let {title , url , id}=props;
    return (
        <div>
            {title}-
            <Link to={url + '/' + id}>users {id} details </Link>

        </div>
    );
}