import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./Assets/GlobalStyle";
import Login from "./Login-page";
import Registration from "./Registration-page";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/cadastro" element={<Registration />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
