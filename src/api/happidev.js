import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.happi.dev",
});

export default instance;
