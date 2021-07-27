import axios from "axios";

export default class LanguageService{
    getLanguages(){
        return axios.get("http://localhost:50550/api/lang/getAll")

    }

    findByNameLanguage(){ //parametre
        return axios.get("http://localhost:50550/api/lang/find")
    }

    addLanguage(){ //parametre
        return axios.post("http://localhost:50550/api/lang/add")
    }
}