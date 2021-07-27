import axios from "axios";

export default class UserService{
    getUsers(){
        return axios.get("http://localhost:50550/api/user/getAll")
    }
}