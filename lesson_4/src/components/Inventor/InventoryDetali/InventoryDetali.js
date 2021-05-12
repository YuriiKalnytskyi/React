import {useEffect, useState} from "react";
import {getInventorDelali} from "../../services/api";


export default function InventoryDetali ({item}) {
    let {match:{params:{id}}}=item;
    let [detali , setDetali] = useState(null);
    useEffect(()=>{
        getInventorDelali(id) .then(value => setDetali({...value}))
    },[])
  return(
      <div>
          {
              detali &&<div>{detali.data.title}</div>
          }

      </div>
  )
}