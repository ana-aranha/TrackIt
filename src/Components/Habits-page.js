import UserContext from "./contexts/UserContext";
import { useContext } from "react";
import { GetHabits } from "./Services/Trackit";
import { HabitsStyle } from "./Today-page";
import Top from "./Top-page";

export default function HabitsPage() {
	const { dataToken } = useContext(UserContext);

	const conf = { headers: { Authorization: `Bearer ${dataToken}` } };
	GetHabits(conf)
		.then((resp) => console.log(resp.data))
		.catch((resp) => console.log(resp));

	console.log(dataToken, conf);
	return (
		<>
			<Top />
			<HabitsStyle>
				<h2>Meus hábitos</h2>
			</HabitsStyle>
		</>
	);
}
