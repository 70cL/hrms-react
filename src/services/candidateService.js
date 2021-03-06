import axios from "axios";

export default class CandidateService{
    getAllCandidates(){
        return axios.get("http://localhost:50550/api/candidates/getAll")
    }

    addCandidate(values){ 
        return axios.post("http://localhost:50550/api/candidates/add", values)
    }
}