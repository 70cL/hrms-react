import axios from "axios";

export default class JobAdvertisementServices{
    getAllAdvertisements(){
        return axios.get("http://localhost:50550/api/jobadv/getAll")
    }

    getById(id){
        return axios.get("http://localhost:50550/api/jobadv/getById?id="+id)
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