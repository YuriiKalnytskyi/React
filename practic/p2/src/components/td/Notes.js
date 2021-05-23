import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import List from "./List";
import {CASTOM ,DELETE} from "../../redux/actionTypes";


export default function Notes () {
    const {list} = useSelector((state)=>state);
    let [ inf, setInf]=useState("")
    const dispatch = useDispatch()

    const txt=({target: {value}})=>{
        setInf(value)
    }
    const save = (e)=>{
        e.preventDefault()
        dispatch({type:CASTOM  ,payload:inf})
    }
    const del = (id)=>{
        dispatch({type:DELETE,payload:id})

    }

  return(
      <div>
          <input type={"text"}  onChange={txt} value={inf}/>
          <button onClick={save}>save</button>

          {
              list.map((value , index)=> <List
              key={index}
              item={value}
              index={index}
              del={del}

              />)
          }


      </div>
  )
}