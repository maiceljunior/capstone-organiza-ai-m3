import axios from "axios";

export const Api = axios.create({
  baseURL: "https://organiza-ai.herokuapp.com/",
});
