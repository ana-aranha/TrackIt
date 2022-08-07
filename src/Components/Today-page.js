import UserContext from "./contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Top from "./Top-page";
import { todaysHabits } from "./Services/Trackit";
import * as dayjs from "dayjs";
import styled from "styled-components";
import Footer from "./Footer-page";
import { HabitItem } from "./Habits-page";

export default function Today() {
	const { conf, dataLogin } = useContext(UserContext);
	const daysPt = [
		"Domingo",
		"Segunda",
		"Terça",
		"Quarta",
		"Quinta",
		"Quinta",
		"Sábado",
	];

	const customParseFormat = require("dayjs/plugin/customParseFormat");
	dayjs.extend(customParseFormat);
	const now = `${daysPt[dayjs().day()]}, ${dayjs().format("DD/MM")}`;

	const navigate = useNavigate();
	const [todayHabitsArray, setTodayHabitsArray] = useState("");

	useEffect(() => {
		if (dataLogin.email === "") {
			navigate("/");
		} else {
			todaysHabits(conf)
				.then((resp) => setTodayHabitsArray([...resp.data]))
				.catch((resp) => console.log(conf, resp));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(todayHabitsArray);

	return (
		<>
			<Top />
			<HabitsStyle>
				<h2>{now}</h2>
				<h3>Nenhum hábito concluído ainda </h3>
				{todayHabitsArray.length === 0 ? (
					<h3>
						Você não tem nenhum hábito cadastrado para hoje ainda. Adicione um
						hábito para começar a trackear!
					</h3>
				) : (
					todayHabitsArray.map((el, i) => (
						<HabitItem key={i}>
							<div>
								<h3>{el.name}</h3>
								<p>
									Sequência atual: <span>{el.currentSequence} dias</span>
								</p>
								<p>
									Seu record: <span>{el.highestSequence} dias</span>
								</p>
							</div>
							<div>
								<CheckButton background={el.done}>
									<ion-icon name="checkmark-outline"></ion-icon>
								</CheckButton>
							</div>
						</HabitItem>
					))
				)}
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
		justify-content: space-between;
		align-items: flex-start;
	}
`;

const CheckButton = styled.div`
	padding: 10px;
	border-radius: 6px;
	font-size: 40px;
	color: #ffffff;
	background-color: ${(props) => (props.background ? "#8FC549" : "#EBEBEB")};

	ion-icon {
		--ionicon-stroke-width: 80px;
	}
`;
