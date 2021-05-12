import axios from "axios";


let options = {
    baseURL:'https://api.sampleapis.com/futurama'

}
let axiosInstance = axios.create(options);

const getCharacters =()=>{
    return axiosInstance.get('/characters'); // promise
}
const getInventor =(id)=> {
    return axiosInstance.get('/inventory'); // promise
}
const getInventorDelali =(id)=> {
    return axiosInstance.get('/inventory/'+ id);// promise
}
export {
    getCharacters ,getInventor , getInventorDelali
};