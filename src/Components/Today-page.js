import UserContext from "./contexts/UserContext";
import { useContext } from "react";
import Top from "./Top-page";
import { todaysHabits } from "./Services/Trackit";
import * as dayjs from "dayjs";
import { useLocalData } from "./Services/useLocal";
import styled from "styled-components";

export default function Today() {
	const { dataLogin, dataToken, setDataLogin, setDataToken } =
		useContext(UserContext);
	const customParseFormat = require("dayjs/plugin/customParseFormat");
	dayjs.extend(customParseFormat);
	const now = dayjs().format("ddd, DD/MM");
	const newData = useLocalData();

	if (newData) {
		setDataLogin(newData);
		setDataToken(newData.token);
		const conf = { headers: { Authorization: `Bearer ${dataToken}` } };
		todaysHabits(conf)
			.then((resp) => console.log(resp.data))
			.catch((resp) => console.log(resp));

		console.log(dataLogin, dataToken, conf);
	}

	return (
		<>
			<Top />
			<HabitsStyle>
				<h2>{now}</h2>
				<h3>Nenhum hábito concluído ainda </h3>
			</HabitsStyle>
		</>
	);
}

export const HabitsStyle = styled.div`
	margin: 120px 30px;

	h2 {
		font-weight: 400;
		font-size: 23px;
		color: #126ba5;
	}

	div {
		display: flex;
	}
`;
