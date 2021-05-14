import axios from "axios";

let options = {
    baseURL:'https://reqres.in/api'
}
let axiosInstance = axios.create(options);

const getUsers =(page)=>{
    return axiosInstance.get('/users?page='+page); // promise
}
const getUsersDetali =(id)=>{
    return axiosInstance.get('/users/'+id); // promise
}


export {
    getUsers , getUsersDetali
}