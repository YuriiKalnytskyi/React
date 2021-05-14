import {useEffect, useState} from "react";
import {getUsersDetali} from "../../servises/api";


export default function UsersDetali(props) {
    console.log(props)
    const {id} = props;
    let [detail, setDetail] = useState(null)
    useEffect(() => {
        getUsersDetali(id).then(value => setDetail(value.data.data))
    }, [id])

    return (
        <div>
            {detail && <div>
                {detail.id}-
                {detail.first_name}-
                {detail.last_name}-
                {detail.email}
                <br/>
                <img src={detail.avatar} alt=""/>
            </div>
            }
        </div>
    )
}