
export default function User2({item,search1}) {
    return (
        <div>
            {item.id} - {item.name} - {item.email}
            <button onClick={()=>search1(item.id)}>details</button>
        </div>
    )
}