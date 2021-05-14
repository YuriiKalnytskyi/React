import {useEffect, useState} from "react";
import {getUsersDetalJson, getUsersPostJson} from "../../servises/api";

export default function UsersPost({id}) {
    console.log(id)
    let [userDetails, setUserDetails] = useState(null)
    let [user, setUser] = useState(null)
    let [flag, setFlag] = useState(false)

    useEffect(() => {
        getUsersPostJson().then(value => setUserDetails([...value.data]))
    }, [])
    const post = () => {
        let fil = userDetails.filter(value => value.userId === +id)
        setUser(fil)
        setFlag(true)
        console.log(fil)
    }
    return (
        <div>
            <button onClick={post}>post</button>
            {
                // flag&&JSON.stringify(user)
                flag && <div>
                    {
                        user.map(value => <h3 key={value.id}>{value.id}-{value.title}<br/>{value.body}</h3>
                        )
                    }
                </div>
            }

        </div>
    )
}