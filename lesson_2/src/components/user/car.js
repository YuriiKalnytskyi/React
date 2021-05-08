
export function Car ({item}){
    return(
        <div>
            <h1>{item.producer} - {item.model}  - {item.year}</h1>
            <br/>
            color - {item.color} , type - {item.type}
            <br/>
            motor - {item.engine} , volume-{item.volume}, power -{item.power}

        </div>
    );
}