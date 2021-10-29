import axios from "axios";
import apiConfig from "./apiConfig";

const instance = axios.create({
    baseURL: apiConfig.baseURL
});

export default instance;
