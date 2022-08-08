import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import logo from "../Assets/img/logo.svg";
import { PageStyle, DivButton, Form } from "./Acess-style";
import { Register } from "../Services/Trackit";

export default function Registration() {
	const [disabled, setDisabled] = useState(false);
	const [dataRegistration, setDataRegistration] = useState({
		email: "",
		name: "",
		image: "",
		password: "",
	});
	const navigate = useNavigate();

	function SendingRegister(event) {
		event.preventDefault();
		setDisabled(true);

		Register(dataRegistration)
			.then(navigate("/"))
			.catch(() => {
				if (isImage(dataRegistration.image === false)) {
					alert("Insira o URL de uma imagem");
				} else {
					alert("insira os dados corretamente");
				}
				setDisabled(false);
			});
	}

	return (
		<PageStyle>
			<img src={logo} alt="logo" />
			<Form onSubmit={SendingRegister}>
				<input
					type="email"
					placeholder="email"
					value={dataRegistration.email}
					disabled={disabled}
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
					disabled={disabled}
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
					disabled={disabled}
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
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.image = e.target.value;
						setDataRegistration(aux);
					}}
				/>
				<DivButton type="submit" disabled={disabled}>
					{disabled ? (
						<ThreeDots
							height="80"
							width="80"
							radius="9"
							color="#ffffff"
							ariaLabel="three-dots-loading"
							wrapperStyle={{}}
							wrapperClassName=""
						/>
					) : (
						`Cadastrar`
					)}
				</DivButton>
			</Form>
			<Link to={"/"}>
				<p>Já tem uma conta? Faça login!</p>
			</Link>
		</PageStyle>
	);
}

export function isImage(url) {
	return (
		/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url) && url.startsWith("http")
	);
}
