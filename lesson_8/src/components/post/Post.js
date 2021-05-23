import {useDispatch, useSelector} from "react-redux";
import {useError, useIsLoading, usePost, useResetLoading} from "../../redux";
import {useEffect} from "react";



export default function Post () {
    const {post,IsLoading,error}=useSelector(({post})=>post)
    const postFetch = usePost()
    const posrtIsLoading = useIsLoading()
    const posrtResetIsLoading= useResetLoading()
    const postError = useError()

    const dispatch= useDispatch()
    const fetchPost = async ()=>{
        try {
            posrtIsLoading()
            const r = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await r.json()
            postFetch(data)
            console.log(data)
        }catch (e){
            console.log(e , '!!!')
            posrtResetIsLoading()
            postError()
        }
    }
    useEffect(()=>{
        fetchPost()
    },[])

    if (IsLoading){
        return <div>Loading!!!</div>
    }
    if(error){
        return <div>{error}</div>
    }

  return(
      <div>
          {
              post.map((post)=>{
                  return <p key={post.id}>{post.id} - {post.title}</p>
              })
          }
        
      </div>
  )
}