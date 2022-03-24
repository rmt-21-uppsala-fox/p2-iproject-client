import axios from "axios";

const url = axios.create({
  baseURL: "https://api.imgflip.com/caption_image",
});

export default url;
