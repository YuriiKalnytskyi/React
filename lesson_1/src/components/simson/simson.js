import './simson.css'
function Character (props){
    let {name , image} = props
return <div>
    <p>{name}</p>
    <img src={image} alt=""/>

</div>


}
export default  Character