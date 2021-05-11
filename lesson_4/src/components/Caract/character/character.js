export default function Character(props){
    let {name:{first,last} , images:{main}} = props
    return(
        <div>
                {first}-{last}

            <img src={main} alt={last}/>
        </div>
    );
}