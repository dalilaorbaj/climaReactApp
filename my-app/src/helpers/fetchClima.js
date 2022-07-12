import axios from "axios";


export const getClima = async (ciudad, pais) =>{
    
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q={ciudad},{pais}&APPID=467eb2e2a1738c82e813a30610d7c354`);
    return res.data;
}