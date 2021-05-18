import {useState, useEffect} from "react";
import './Notes.css'
import User from "./User";

export default function Notes() {
    let [name, setName] = useState('')
    let [surname, setSurname] = useState('')
    let [city, setCity] = useState('')
    let [year, setYear] = useState('')
    let [phone, setPhone] = useState('')
    let [information, setInformation] = useState(JSON.parse(localStorage.getItem('user')) || [])
    let [user, setUser] = useState('')


    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(information))
    })
    const add_information = (ev) => {
        // ev.preventDefault();
        setInformation([...information, {name, id: Date.now(), surname, city, year, phone}])
    }

    const nameAdd = (ev) => {
        setName(name = ev.target.value)
    }
    const surnameAdd = (ev) => {
        setSurname(surname = ev.target.value)
    }
    const cityAdd = (ev) => {
        setCity(city = ev.target.value)
    }
    const yearAdd = (ev) => {
        setYear(year = ev.target.value)
    }
    const phoneAdd = (ev) => {
        setPhone(phone = ev.target.value)
    }
    const del = (id)=>{
        setInformation(information.filter(value =>value.id!==id))
    }
    const update=(id)=>{
        setUser(information.find(value=>value.id===id))
    }
    const updateUser=(e)=>{
        // e.preventDefault()
        console.log();
        setInformation([...information.filter(value => value.id !== user.id), {name, id: Date.now(), surname, city, year, phone}])
        setUser(null)
    }

    console.log(information);

    console.log(user);
    return (
        <div className={'container'}>
            <div className={'Add_form'}>
                <form>
                    <input defaultValue={user&&user.name} onChange={nameAdd} className={'input'} type={"text"} placeholder={"name"}/>
                    <input defaultValue={user&&user.surname} onChange={surnameAdd} className={'input'} type={"text"} placeholder={"surname"}/>
                    <input defaultValue={user&&user.city} onChange={cityAdd} className={'input'} type={"text"} placeholder={"city"}/>
                    <input defaultValue={user&&user.year} onChange={yearAdd} className={'input'} type={"text"} placeholder={"year"}/>
                    <input defaultValue={user&&user.phone} onChange={phoneAdd} className={'input'} type={"text"} placeholder={"phone(+380)"}/>
                    <button onClick={user?(e)=>updateUser(e):add_information} className={'bt'}>{user?'update':'add'}</button>
                </form>
            </div>

            <div>
                {
                    information.map((value, index) => {
                        return <User key={index}
                                     del={del}
                                     update={update}
                                     {...value}/>
                    })
                }

            </div>

        </div>
    )
}