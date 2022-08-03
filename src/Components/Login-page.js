import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./Assets/img/logo.svg";

export default function Login() {
	const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
	/* 	console.log(Object.getOwnPropertyNames(dataLogin)); */

	return (
		<PageStyle>
			<img src={logo} alt="logo" />
			<Form onSubmit={console.log(dataLogin)}>
				<input
					type="email"
					placeholder="email"
					value={dataLogin.email}
					onChange={(e) => {
						const aux = { ...dataLogin };
						aux.email = e.target.value;
						setDataLogin(aux);
					}}
				/>
				<input
					type="password"
					placeholder="senha"
					value={dataLogin.password}
					onChange={(e) => {
						const aux = { ...dataLogin };
						aux.password = e.target.value;
						setDataLogin(aux);
					}}
				/>
				<button type="submit">Entrar</button>
			</Form>
			<Link to={"/cadastro"}>
				<p>Não tem uma conta? Cadastre-se!</p>
			</Link>
		</PageStyle>
	);
}

export const PageStyle = styled.div`
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

export const Form = styled.form`
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
