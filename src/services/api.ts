import axios from "axios";

const localUrl = "http://localhost:5000/";

export const api = axios.create({
  baseURL: localUrl || process.env.REACT_APP_API,
  headers: {
    post: { "Access-Control-Allow-Origin": "*" },
  },
});
