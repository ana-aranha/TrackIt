import axios from "axios";

const link = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function SendingLogin(obj) {
	const promise = axios.post(`${link}auth/login`, obj);
	return promise;
}

function Register(obj) {
	const promise = axios.post(`${link}auth/sign-up`, obj);
	return promise;
}

function todaysHabits(obj) {
	const promise = axios.get(`${link}habits/today`, obj);
	return promise;
}

function GetHabits(obj) {
	const promise = axios.get(`${link}habits`, obj);
	return promise;
}

function PostHabits(body, obj) {
	const promise = axios.post(`${link}habits`, body, obj);
	return promise;
}

function DeleteHabits(id, obj) {
	const promise = axios.delete(`${link}habits/${id}`, obj);
	return promise;
}

export {
	SendingLogin,
	Register,
	todaysHabits,
	GetHabits,
	PostHabits,
	DeleteHabits,
};
