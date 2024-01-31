import axios from "axios"
const slack = axios.create({
  baseURL: "https://www.salck.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
