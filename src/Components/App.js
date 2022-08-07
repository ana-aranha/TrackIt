import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./Assets/GlobalStyle";
import Login from "./Login-page";
import Registration from "./Registration-page";
import UserContext from "./contexts/UserContext";
import Today from "./Today-page";
import HabitsPage from "./Habits-page";
import History from "./History";

export default function App() {
	const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
	const [dataToken, setDataToken] = useState("");
	const [conf, setConf] = useState({});

	return (
		<>
			<UserContext.Provider
				value={{
					dataLogin,
					setDataLogin,
					dataToken,
					setDataToken,
					conf,
					setConf,
				}}
			>
				<BrowserRouter>
					<GlobalStyle />
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/cadastro" element={<Registration />} />
						<Route path="/hoje" element={<Today />} />
						<Route path="/habitos" element={<HabitsPage />} />
						<Route path="/historico" element={<History />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
