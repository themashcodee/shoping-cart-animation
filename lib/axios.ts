import axios from "axios";

const client = axios.create({
	baseURL: "https://fakestoreapi.com/",
});

export default client;
