import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./Assets/GlobalStyle";
import Login from "./Login-page";
import Registration from "./Registration-page";
import UserContext from "./contexts/UserContext";
import Today from "./Today-page";

export default function App() {
	const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
	const [dataToken, setDataToken] = useState("");

	return (
		<>
			<UserContext.Provider
				value={{ dataLogin, setDataLogin, dataToken, setDataToken }}
			>
				<BrowserRouter>
					<GlobalStyle />
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/cadastro" element={<Registration />} />
						<Route path="/hoje" element={<Today />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
