import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://blog-app-server-phi.vercel.app/api/",
});
export default axiosInstance;
