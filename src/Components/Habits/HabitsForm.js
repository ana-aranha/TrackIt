import {
	HabitItem,
	FormHabits,
	DivButtonHabits,
	DivButtonCancel,
	Week,
} from "./Habits-style";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { PostHabits, todaysHabits } from "../Services/Trackit";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { GetHabits } from "../Services/Trackit";

export default function HabitsForm({
	displayViewOption,
	weekdays,
	setDisplayViewOption,
	setHabitsArray,
}) {
	const [disabled, setDisabled] = useState(false);
	const { conf, setTodayHabitsArray } = useContext(UserContext);
	const [habitNew, setHabitNew] = useState({ name: "", days: [] });

	function CancelNewHabit(event) {
		event.preventDefault();
		setDisplayViewOption(false);
	}

	function GettinNewHabit(event) {
		event.preventDefault();
		setDisabled(true);

		if (habitNew.days.length > 0) {
			PostHabits(habitNew, conf)
				.then((resp) => {
					setDisabled(false);
					setHabitNew({ name: "", days: [] });
					setDisplayViewOption(false);
					GetHabits(conf)
						.then((resp) => {
							setHabitsArray([...resp.data]);
						})
						.catch((resp) => console.log(resp));
					todaysHabits(conf)
						.then((resp) => setTodayHabitsArray(resp.data))
						.catch((resp) => console.log(conf, resp));
				})
				.catch((resp) => {
					alert("Preencha os campos corretamente");
					setDisabled(false);
				});
		} else {
			alert("Escolha um dia para seu hábito");
			setDisabled(false);
		}
	}

	return (
		<HabitItem style={{ display: displayViewOption ? "block" : "none" }}>
			<div>
				<FormHabits>
					<input
						type="text"
						placeholder="nome do hábito"
						disabled={disabled}
						value={habitNew.name}
						onChange={(e) => {
							const aux = { ...habitNew };
							aux.name = e.target.value;
							setHabitNew(aux);
						}}
					/>
					<div>
						<DivButtonCancel onClick={CancelNewHabit} disabled={disabled}>
							Cancelar
						</DivButtonCancel>
						<DivButtonHabits
							ColorButton={disabled}
							disabled={disabled}
							onClick={GettinNewHabit}
						>
							{disabled ? (
								<ThreeDots
									height="80"
									width="80"
									radius="9"
									color="#ffffff"
									ariaLabel="three-dots-loading"
									wrapperStyle={{}}
									wrapperClassName=""
								/>
							) : (
								`Entrar`
							)}
						</DivButtonHabits>
					</div>
				</FormHabits>
				<div>
					{weekdays.map((e, index) => {
						return (
							<DayTemplade
								e={e}
								index={index}
								habitNew={habitNew}
								setHabitNew={setHabitNew}
								disabled={disabled}
								key={`days${index}`}
							/>
						);
					})}
				</div>
			</div>
		</HabitItem>
	);
}

function DayTemplade({ e, index, habitNew, setHabitNew, disabled }) {
	const [dayOption, setDayOption] = useState(false);

	return (
		<Week background={dayOption}>
			<p
				onClick={() => {
					if (!disabled) {
						if (!dayOption) {
							const aux = { ...habitNew };
							aux.days.push(index);
							setHabitNew(aux);
						} else {
							const aux = { ...habitNew };
							aux.days = habitNew.days.filter((el) => el !== index);
							setHabitNew(aux);
						}
						setDayOption(!dayOption);
					}
				}}
			>
				{e}
			</p>
		</Week>
	);
}
