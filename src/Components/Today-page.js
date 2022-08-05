import UserContext from "./contexts/UserContext";
import { useContext } from "react";

export default function Today() {
	const { dataLogin, dataToken } = useContext(UserContext);

	console.log(dataLogin, dataToken);

	return (
		<>
			<h1>Página do dia</h1>
		</>
	);
}
