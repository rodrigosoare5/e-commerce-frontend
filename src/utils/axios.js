import axios from "axios";
const baseURL =  'https://ecommerce-api-rodrigo.herokuapp.com/api/'

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