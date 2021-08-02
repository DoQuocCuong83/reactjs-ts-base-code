import axios from "axios";

export const baseUrl =
  process.env.REACT_APP_API_URL || "http://localhost:3000/";

const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
  res => res.data,
  error => {
    console.log(error);
  }
);

export default axiosInstance;
