import axios from "axios";

const url = axios.create({
  baseURL: "https://api.imgflip.com/get_memes",
});

export default url;
