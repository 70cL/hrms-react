import axios from "axios";

export default class JobAdvertisementServices{
    getAllAdvertisements(){
        return axios.get("http://localhost:50550/api/jobadv/getAll")
    }

    getByActive(){ //parameter
        return axios.get("http://localhost:50550/api/jobadv/active")
    }

    getByActiveByDeadLine(){ //parameter
        return axios.get("http://localhost:50550/api/jobadv/active/order")
    }

    getByActiveAndEmployerName(){ //parameter
        return axios.get("http://localhost:50550/api/jobadv/get/companyName")
    }

}