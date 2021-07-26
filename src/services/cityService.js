import axios from "axios"

export default class CityService{
    getCities(){
        return axios.get("http://localhost:50550/api/cities/getAll")
    }
}