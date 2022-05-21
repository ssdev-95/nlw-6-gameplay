import axios from "axios";

const api = axios.create({
	baseURL: "https://discord.com/ap"
})

export { api };
