import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function useLocalData() {
	const navigate = useNavigate();
	const [newLogin, setNewLogin] = useState({});

	useEffect(() => {
		const aux = JSON.parse(localStorage.getItem("LocalData"));

		if (!aux) {
			navigate("/");
		}
		setNewLogin(aux);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return newLogin;
}

function useLocalToken() {
	const navigate = useNavigate();
	const [newToken, setNewToken] = useState({});

	useEffect(() => {
		const aux = JSON.parse(localStorage.getItem("LocalData"));

		if (!aux) {
			navigate("/");
		}
		setNewToken(aux);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return newToken;
}

export { useLocalData, useLocalToken };
