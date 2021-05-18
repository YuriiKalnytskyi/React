import {useSelector , useDispatch} from "react-redux";
import './Counter.css'
import {useState} from "react";

export default function Counter () {
    const counter = useSelector((state)=>state.counter);
    const dispatch = useDispatch()

    const inc = ()=>{
        dispatch({type:"INC"});
    }
    const inc_100 = ()=>{
        dispatch({type:"INC_100"});
    }
    const dec = ()=>{
        dispatch({type:"DEC"});
    }
    const dec_100 = ()=>{
        dispatch({type:"DEC_100"});
    }
    const reset = ()=>{
        dispatch({type:"RES"});
    }
    let [value , setValue]=useState(0)
    const castom=()=>{
        dispatch({type:"CASTOM" , payload: Number(value)})
    }

    const castom_1=()=>{
        dispatch({type:"CASTOM1" , payload: Number(value)})
    }

  return(
      <div className={"container"}>
          <h2>Counter {counter}</h2><br/>
          <button onClick={dec_100}>DEK(-100)</button>
          <button onClick={dec}>DEK</button>
          <button onClick={reset}>RESET</button>
          <button onClick={inc}>INC</button>
          <button onClick={inc_100}>INC(+100)</button>

          <button onClick={castom_1}>castom - </button>

          <input type="number" value={value} onChange={({target:{value}})=>{
              setValue(value)
          }}/>
          <button onClick={castom}>castom + </button>


      </div>
  )
}