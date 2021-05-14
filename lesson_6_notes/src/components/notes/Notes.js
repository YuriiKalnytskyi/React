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
    console.log(JSON.parse(localStorage.getItem('user')))
    return (
        <div className={'container'}>
            <div className={'Add_form'}>
                <form>
                    <input onChange={nameAdd} className={'input'} type={"text"} placeholder={"name"}/>
                    <input onChange={surnameAdd} className={'input'} type={"text"} placeholder={"surname"}/>
                    <input onChange={cityAdd} className={'input'} type={"text"} placeholder={"city"}/>
                    <input onChange={yearAdd} className={'input'} type={"text"} placeholder={"year"}/>
                    <input onChange={phoneAdd} className={'input'} type={"text"} placeholder={"phone(+380)"}/>
                    <button onClick={add_information} className={'bt'}> add</button>
                </form>
            </div>

            <div>
                {
                    information.map((value, index) => {
                        return <User key={index}
                                     del={del}
                                     {...value}/>
                    })
                }

            </div>

        </div>
    )
}