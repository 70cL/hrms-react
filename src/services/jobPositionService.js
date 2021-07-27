import axios from "axios";

export default class JobPositionService{
    getJobPositions(){
        return axios.get("http://localhost:50550/api/job/getAll")
    }

    addJobPositions(){ //parameter
        return axios.post("http://localhost:50550/api/job/add")
    }

    getJobPositionById(){ //parameter
        return axios.get("http://localhost:50550/api/job/getById")
    }
}