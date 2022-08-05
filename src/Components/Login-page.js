import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./Assets/img/logo.svg";
import UserContext from "./contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";
import { SendingLogin } from "./Services/Trackit";

export default function Login() {
	const { dataLogin, setDataLogin, setDataToken } = useContext(UserContext);
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	function GettinLogin(event) {
		event.preventDefault();
		setDisabled(true);

		SendingLogin(dataLogin)
			.then((resp) => {
				setDataLogin(resp.data);
				setDataToken(resp.data.token);
				localStorage.setItem("LocalToken", resp.data.token);
				localStorage.setItem("LocalData", JSON.stringify(resp.data));
				navigate("/hoje");
			})
			.catch(() => {
				alert("usuário inválido");
				setDisabled(false);
			});
	}

	return (
		<PageStyle>
			<img src={logo} alt="logo" />
			<Form onSubmit={GettinLogin}>
				<input
					type="email"
					placeholder="email"
					disabled={disabled}
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
					disabled={disabled}
					value={dataLogin.password}
					onChange={(e) => {
						const aux = { ...dataLogin };
						aux.password = e.target.value;
						setDataLogin(aux);
					}}
				/>
				<DivButton type="submit" ColorButton={disabled}>
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
						`Entrar`
					)}
				</DivButton>
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
`;

export const DivButton = styled.button`
	border-style: none;
	color: #ffffff;
	background-color: ${(props) =>
		props.ColorButton ? `rgba(82, 182, 253, 0.7)` : `rgba(82, 182, 253, 1)`};
	width: 80%;
	height: 50px;
	border-radius: 5px;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
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
