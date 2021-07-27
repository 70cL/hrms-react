import axios from "axios";

export default class JobExperienceService{
    getExperiences(){
        return axios.get("http://localhost:50550/api/jobexp/getAll")
    }
}