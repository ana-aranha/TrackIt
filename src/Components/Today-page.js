import UserContext from "./contexts/UserContext";
import { useContext } from "react";
import Top from "./Top-page";

export default function Today() {
	const { dataLogin, dataToken } = useContext(UserContext);

	console.log(dataLogin, dataToken);

	return (
		<>
			<Top />
			<h1>Página do dia</h1>
		</>
	);
}
