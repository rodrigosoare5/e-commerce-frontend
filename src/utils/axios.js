import axios from "axios";
const baseURL = window.location.href.slice(0,21) == 'http://localhost:3000' ? 'http://localhost:8000/' : 'http://20.228.132.55:8000/'

const useAxios = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: localStorage.getItem('access_token')
			? 'JWT ' + localStorage.getItem('access_token')
			: null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 
});

export default useAxios;