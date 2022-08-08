import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/img/logo.svg";
import UserContext from "../contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";
import { SendingLogin } from "../Services/Trackit";
import { PageStyle, DivButton, Form } from "./Acess-style";

export default function Login() {
	const { dataLogin, setDataLogin, setDataToken, setConf } =
		useContext(UserContext);
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	function GettinLogin(event) {
		event.preventDefault();
		setDisabled(true);

		SendingLogin(dataLogin)
			.then((resp) => {
				setDataLogin(resp.data);
				setDataToken(resp.data.token);
				setConf({
					headers: { Authorization: `Bearer ${resp.data.token}` },
				});
				localStorage.setItem("LocalToken", resp.data.token);
				localStorage.setItem("LocalData", JSON.stringify(resp.data));
				localStorage.setItem(
					"conf",
					JSON.stringify({
						headers: { Authorization: `Bearer ${resp.data.token}` },
					}),
				);
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
