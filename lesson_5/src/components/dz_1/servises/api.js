import axios from "axios";

let options = {
    baseURL:'https://jsonplaceholder.typicode.com'

}
let axiosInstance = axios.create(options);

const getUsersJson =()=>{
    return axiosInstance.get('/users'); // promise
}
const getUsersDetalJson =(id)=>{
    return axiosInstance.get('/users/'+id); // promise
}
const getUsersPostJson =()=>{
    return axiosInstance.get('/posts'); // promise
}
export {
    getUsersJson ,getUsersDetalJson ,getUsersPostJson
}