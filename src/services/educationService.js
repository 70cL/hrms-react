import axios from "axios";

export default class EducationService{
    getAllEducations(){
        return axios.get("http://localhost:50550/api/edu/getAll")
    }
}