import axios from "axios";

export default class ResumeService{
    getResumes(){
        return axios.get("http://localhost:50550/api/resume/getAll")   
    }

    uploadPhoto(){
        return axios.put("http://localhost:50550/api/resume/uploadPhoto")
    }
}