import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://localhost:5001",
  baseURL: "https://amazon-back-end-k90i.onrender.com",
});
export { axiosInstance };
