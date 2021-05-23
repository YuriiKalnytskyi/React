

export default function List ({item , index , del }) {
  return(
      <div>
          <div>{item}--{index}</div>
          <button onClick={()=>{del(index)}}>delete</button>
      </div>
  )
}