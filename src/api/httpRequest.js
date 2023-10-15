import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/api/v1",
});
httpRequest.defaults.withCredentials = true;
export default httpRequest;
