import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import {
	todaysHabits,
	counterfunction,
	CheckHabits,
	UnCheckHabits,
} from "../Services/Trackit";
import {
	HabitItem,
	HabitsStyle,
	Message,
	SpanItem,
} from "../Habits/Habits-style";
import { CheckButton } from "./Today-style";
import getDate from "../Services/Date";
import { ThreeDots } from "react-loader-spinner";

export default function Today() {
	const {
		conf,
		dataLogin,
		SetPercentage,
		todayHabitsArray,
		setTodayHabitsArray,
		percentage,
	} = useContext(UserContext);

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
	} else if (doneHabit === 0) {
		SetPercentage(0);
	}

	function CheckFunction(id, done) {
		if (done === false) {
			CheckHabits(id.toString(), conf)
				.then(() => {
					todaysHabits(conf)
						.then((resp) => setTodayHabitsArray(resp.data))
						.catch((resp) => console.log(conf, resp));
				})
				.catch((resp) => {
					console.log("deu ruim", resp);
				});
		} else if (done === true) {
			UnCheckHabits(id.toString(), conf)
				.then(() => {
					todaysHabits(conf)
						.then((resp) => setTodayHabitsArray(resp.data))
						.catch((resp) => console.log(conf, resp));
				})
				.catch((resp) => {
					console.log("deu ruim", resp);
				});
		}
	}

	return (
		<>
			{todayHabitsArray !== "" ? (
				<HabitsStyle>
					<h2>{getDate()}</h2>
					{todayHabitsArray.length === 0 ? (
						<>
							<h3>
								Você não tem nenhum hábito cadastrado para hoje. Adicione um
								hábito para começar a trackear!
							</h3>
						</>
					) : (
						<>
							{doneHabit !== 0 ? (
								<Message color={"true"}>
									{percentage}% dos hábitos concluídos
								</Message>
							) : (
								<Message color={"false"}>Nenhum hábito concluído ainda</Message>
							)}
							{todayHabitsArray.map((el, index) => (
								<List el={el} key={index} CheckFunction={CheckFunction} />
							))}
						</>
					)}
				</HabitsStyle>
			) : (
				<HabitsStyle>
					<ThreeDots
						height="80"
						width="80"
						radius="9"
						color="grey"
						ariaLabel="three-dots-loading"
						wrapperStyle={{}}
						wrapperClassName=""
					/>
				</HabitsStyle>
			)}
		</>
	);
}

function List({ el, CheckFunction }) {
	const [check, setCheck] = useState(el.done);
	let spanColor = "false";
	if (el.currentSequence === el.highestSequence) {
		spanColor = "true";
	}

	return (
		<HabitItem>
			<div>
				<h3>{el.name}</h3>
				<p>
					Sequência atual: <span>{el.currentSequence} dias</span>
				</p>
				<p>
					Seu record:{" "}
					<SpanItem color={spanColor}>{el.highestSequence} dias</SpanItem>
				</p>
			</div>
			<div>
				<CheckButton
					background={check}
					onClick={() => {
						setCheck(!check);
						CheckFunction(el.id, el.done);
					}}
				>
					<ion-icon name="checkmark-outline"></ion-icon>
				</CheckButton>
			</div>
		</HabitItem>
	);
}
