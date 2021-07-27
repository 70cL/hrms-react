import axios from "axios";

export default class EmployerServices{
    getAllEmployers(){
        return axios.get("http://localhost:50550/api/employers/getAll")
    }
    addEmployer(){ //parameter
        return axios.post("http://localhost:50550/api/employers/add")
    }
}