import {resetIsLoading,setError, setIsLoading, setPost} from "../actionCreators";
import {useDispatch} from "react-redux";



export const usePost=()=>{
    const dispatch = useDispatch()
    return(date)=>{
        dispatch(setPost(date))
    }
}
export const useIsLoading=()=> {
    const dispatch = useDispatch()
    return () => {
        dispatch(setIsLoading())
    }
}
export const useResetLoading=()=> {
    const dispatch = useDispatch()
    return () => {
        dispatch(resetIsLoading())
    }
}
export const useError=()=> {
    const dispatch = useDispatch()
    return (payload) => {
        dispatch(setError(payload))
    }
}