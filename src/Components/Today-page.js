import UserContext from "./contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Top from "./Top-page";
import { todaysHabits } from "./Services/Trackit";
import * as dayjs from "dayjs";
import { useLocalData, useLocalConf, useLocalToken } from "./Services/useLocal";
import styled from "styled-components";
import Footer from "./Footer-page";

export default function Today() {
	const { conf, setDataLogin, setDataToken, setConf } = useContext(UserContext);

	const customParseFormat = require("dayjs/plugin/customParseFormat");
	dayjs.extend(customParseFormat);
	const now = dayjs().format("ddd, DD/MM");

	const navigate = useNavigate();
	const newData = useLocalData();
	const newToken = useLocalToken();
	const newConf = useLocalConf();

	useEffect(() => {
		if (!conf.headers) {
			navigate("/");
			setDataLogin(newData);
			setDataToken(newToken);
			setConf(newConf);
		}
		todaysHabits(conf)
			.then((resp) => console.log(resp.data))
			.catch((resp) => console.log(resp));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Top />
			<HabitsStyle>
				<h2>{now}</h2>
				<h3>Nenhum hábito concluído ainda </h3>
			</HabitsStyle>
			<Footer />
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

	h3 {
		margin-top: 30px;
		color: #666666;
		font-size: 18px;
		font-weight: 400;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
