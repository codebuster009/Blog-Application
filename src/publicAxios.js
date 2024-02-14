import axios from "axios";
const publicAxios = axios.create({
    baseURL: 'http://localhost:4000/',
  });
  export default publicAxios;