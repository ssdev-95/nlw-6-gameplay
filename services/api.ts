import axios from "axios";

const BASE_URL="https://discord.com/api"
const api = axios.create({
	baseURL: BASE_URL
})

export { api };
