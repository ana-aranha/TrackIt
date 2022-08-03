import axios from "axios";

const link = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function Loggin(obj) {
	const promise = axios.post(`${link}auth/login`, obj);
	return promise;
}

function Register(obj) {
	const promise = axios.post(`${link}auth/sign-up`, obj);
	return promise;
}

export { Loggin, Register };
