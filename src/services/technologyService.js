import axios from "axios";

export default class TechnologyService{
    getTechnologies(){
        return axios.get("http://localhost:50550/api/tech/getAll")
    }

    addTechnology(){ //parametre
        return axios.post("http://localhost:50550/api/tech/add")
    }
}