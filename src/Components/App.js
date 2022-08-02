import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./Assets/GlobalStyle";
import Login from "./Login-page";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
