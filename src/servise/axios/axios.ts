import axios from "axios";

const basUrl = "https://redux-cms.iran.liara.run/api/"

const Axios = axios.create({
    baseURL: basUrl,
    headers: {
        "Content-type": "application/json"
    }
})

Axios.interceptors.response.use(
    response => {
        console.log(response);
        return response
    }
    ,
    error => {
        console.log("error axios", error);
        return error
    }
)

export default Axios