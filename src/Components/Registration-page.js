import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Assets/img/logo.svg";
import { PageStyle, Form } from "./Login-page";

export default function Registration() {
	const [dataRegistration, setDataRegistration] = useState({
		email: "",
		name: "",
		image: "",
		password: "",
	});

	function SendingRegister(event) {
		event.preventDefault();
		isImage(dataRegistration.image)
			? console.log(dataRegistration)
			: alert("Insira o URL de uma imagem");
	}

	return (
		<PageStyle>
			<img src={logo} alt="logo" />
			<Form onSubmit={SendingRegister}>
				<input
					type="email"
					placeholder="email"
					value={dataRegistration.email}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.email = e.target.value;
						setDataRegistration(aux);
					}}
				/>
				<input
					type="password"
					placeholder="senha"
					value={dataRegistration.password}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.password = e.target.value;
						setDataRegistration(aux);
					}}
				/>
				<input
					type="text"
					placeholder="nome"
					value={dataRegistration.name}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.name = e.target.value;
						setDataRegistration(aux);
					}}
				/>
				<input
					type="text"
					placeholder="foto"
					value={dataRegistration.image}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.image = e.target.value;
						setDataRegistration(aux);
					}}
				/>
				<button type="submit">Cadastrar</button>
			</Form>
			<Link to={"/"}>
				<p>Já tem uma conta? Faça login!</p>
			</Link>
		</PageStyle>
	);
}

function isImage(url) {
	return (
		/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url) && url.startsWith("http")
	);
}
