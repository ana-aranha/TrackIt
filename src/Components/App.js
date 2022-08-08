import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./Assets/GlobalStyle";
import Login from "./Acess/Login-page";
import Registration from "./Acess/Registration-page";
import UserContext from "./contexts/UserContext";
import HabitsPage from "./Habits/Habits-page";
import History from "./History";
import TodayPage from "./Today/Today-page";

export default function App() {
	const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
	const [dataToken, setDataToken] = useState("");
	const [conf, setConf] = useState({});
	const [percentage, SetPercentage] = useState(0);

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
					percentage,
					SetPercentage,
				}}
			>
				<BrowserRouter>
					<GlobalStyle />
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/cadastro" element={<Registration />} />
						<Route path="/hoje" element={<TodayPage />} />
						<Route path="/habitos" element={<HabitsPage />} />
						<Route path="/historico" element={<History />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
