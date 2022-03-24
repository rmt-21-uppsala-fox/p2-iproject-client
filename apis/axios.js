import axios from "axios";

const instance = axios.create({
	baseURL: " https://manga-ency.herokuapp.com",
});

export default instance;
