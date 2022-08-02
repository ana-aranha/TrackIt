import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./Assets/img/logo.svg";

export default function Login() {
	const [email, setEMail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<PageStyle>
			<img src={logo} alt="logo" />
			<Form onSubmit={console.log("oi")}>
				<input
					type="email"
					placeholder="email"
					value={email}
					onChange={(e) => setEMail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Reservar assento(s)</button>
			</Form>
			<p>Não tem uma conta? Cadastre-se!</p>
		</PageStyle>
	);
}

const PageStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;

	img {
		height: 27%;
	}

	p {
		color: #52b6ff;
		font-size: 18px;
		text-decoration: underline;
		margin-top: 25px;
	}

	button {
		border-style: none;
		color: #ffffff;
		background-color: #52b6ff;
		width: 80%;
		height: 50px;
		border-radius: 5px;
		font-size: 20px;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	input {
		margin: 5px 0;
		width: 80%;
		height: 50px;
		border-radius: 5px;
		padding-left: 10px;
		font-size: 20px;
		border: 1px solid #d4d4d4;
	}
`;
