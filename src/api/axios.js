import axios from "axios";

const instance = axios.create({
  baseURL: "https://furautoparts.herokuapp.com",
});

export default instance;
