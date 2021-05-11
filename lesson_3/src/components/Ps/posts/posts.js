import {useEffect, useState} from "react";
import Post from "../post/post";

export default function Posts() {
    let [posts , setPosts]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value])
                console.log(value)
            })
    },[])
    return (
        <div>
            <div>
                {
                    posts.map(value => <Post kay={value.id} item={value}/>)
                }
            </div>

        </div>
    )
}