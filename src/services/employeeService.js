import axios from "axios";

export default class EmployeeServices{
    getAllEmployees(){
        return axios.get("http://localhost:50550/api/employees/getAll")
    }
}