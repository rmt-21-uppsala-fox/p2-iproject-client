import axios from "axios";

// const customerAPI = axios.create({
//   baseURL: "http://localhost:3000/",
// });

const production = axios.create({
  baseURL: "https://iproject-klikshop.herokuapp.com",
});

export default production;