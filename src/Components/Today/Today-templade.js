import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { todaysHabits } from "../Services/Trackit";
import { HabitItem, HabitsStyle } from "../Habits/Habits-style";
import { CheckButton } from "./Today-style";
import getDate from "../Services/Date";

export default function Today() {
	const { conf, dataLogin, SetPercentage } = useContext(UserContext);
	const [todayHabitsArray, setTodayHabitsArray] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (dataLogin.email === "") {
			navigate("/");
		} else {
			todaysHabits(conf)
				.then((resp) => setTodayHabitsArray(resp.data))
				.catch((resp) => console.log(conf, resp));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const doneHabit = counterfunction(todayHabitsArray);

	if (doneHabit !== 0) {
		SetPercentage(Math.round((doneHabit / todayHabitsArray.length) * 100));
	}

	return (
		<HabitsStyle>
			<h2>{getDate()}</h2>
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
	);

	function counterfunction(arr) {
		let counter = 0;
		for (let i in arr) {
			if (arr[i].done) {
				counter += 1;
			}
		}
		return counter;
	}
}
