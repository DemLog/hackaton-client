import axios from "axios";

class APIBase {
    API_URL = "http://192.168.1.120:8000/api/v1/"

    getData(method, params = {}, token = "none") {
        let responseURL = this.API_URL + method + `?token=${token}`;
        for (const [key, value] of Object.entries(params)) {
            const param = `${key}=${value}`;
            responseURL += param + '&';
        }
        return axios.get(responseURL);
    }

    postData(method, body, params = {}, token = "") {
        let responseURL = this.API_URL + method + `token=${token}`;
        for (const [key, value] of Object.entries(params)) {
            const param = `${key}=${value}`;
            responseURL += param + '&';
        }
        return axios.post(responseURL, {...body});
    }

    authUser(body) {
        let responseURL = this.API_URL + 'auth.loginUser';
        return axios.post(responseURL, {...body});
    }
}

export {APIBase};