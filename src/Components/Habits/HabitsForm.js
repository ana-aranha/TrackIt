import {
	HabitItem,
	FormHabits,
	DivButtonHabits,
	DivButtonCancel,
	Week,
} from "./Habits-style";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { PostHabits } from "../Services/Trackit";
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
	const { conf } = useContext(UserContext);
	const [habitNew, setHabitNew] = useState({ name: "", days: [] });

	function CancelNewHabit() {
		setDisplayViewOption(!displayViewOption);
	}

	function GettinNewHabit(event) {
		event.preventDefault();
		console.log(habitNew);
		setDisabled(true);

		if (habitNew.days.length > 0) {
			PostHabits(habitNew, conf)
				.then((resp) => {
					console.log(resp.data);
					setDisabled(false);
					setHabitNew({ name: "", days: [] });
					setDisplayViewOption(!displayViewOption);
					GetHabits(conf)
						.then((resp) => {
							setHabitsArray([...resp.data]);
						})
						.catch((resp) => console.log(resp));
				})
				.catch((resp) => {
					console.log(resp);
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
						<DivButtonCancel onClick={CancelNewHabit}>Cancelar</DivButtonCancel>
						<DivButtonHabits
							type="submit"
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
