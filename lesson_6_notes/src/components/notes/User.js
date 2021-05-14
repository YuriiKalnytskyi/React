import {useState} from "react";
import './Notes.css'

export default function User (props) {
    let {name  ,id, surname ,city,year,phone ,del}=props
    let  [detail , setDetail]= useState(false);

    const details = () => {
    setDetail(true)
    }
    const hide = () => {
        setDetail(false)
    }

  return(
      <div className={'detail'}>
          <h3>{name}-{surname}</h3>
          <button onClick={details}>detail</button>
          <button onClick={hide}>hide</button>
          <button onClick={()=>{del(id)}}>del</button>

          <div className={'details'}>
              {
                  detail && (<div>
                      <h3> name:{name}<br/>
                          surname:{surname}<br/>
                          city:{city}<br/>
                          year:{year}<br/>
                          phone:{phone} <hr/>
                      </h3>

                  </div>)

              }

          </div>

      </div>
  )
}