import UserContext from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { GetHabits, DeleteHabits } from "../Services/Trackit";
import { ButtonConfirm, HabitItem, Week, HabitsStyle } from "./Habits-style";
import HabitsForm from "./HabitsForm";

export default function HabitsTemplade() {
	const { conf, dataLogin } = useContext(UserContext);
	const navigate = useNavigate();
	const [habitsArray, setHabitsArray] = useState("");
	const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
	const [displayViewOption, setDisplayViewOption] = useState(false);

	useEffect(() => {
		if (dataLogin.email === "") {
			navigate("/");
		} else {
			GetHabits(conf)
				.then((resp) => {
					setHabitsArray([...resp.data]);
				})
				.catch((resp) => console.log(resp));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function DeleteFunction(id) {
		if (window.confirm("Deseja mesmo excluir esse hábito?")) {
			DeleteHabits(id.toString(), conf)
				.then(() => {
					GetHabits(conf)
						.then((resp) => {
							setHabitsArray(resp.data);
						})
						.catch((resp) => console.log(resp));
				})
				.catch((resp) => {
					console.log("deu ruim", resp);
				});
		}
	}

	return (
		<>
			{habitsArray !== "" ? (
				<HabitsStyle>
					<div>
						<h2>Meus hábitos</h2>
						<ButtonConfirm>
							<p
								onClick={() => {
									setDisplayViewOption(!displayViewOption);
								}}
							>
								+
							</p>
						</ButtonConfirm>
					</div>
					<HabitsForm
						displayViewOption={displayViewOption}
						weekdays={weekdays}
						setDisplayViewOption={setDisplayViewOption}
						setHabitsArray={setHabitsArray}
					/>
					{habitsArray.length === 0 ? (
						<h3>
							Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
							para começar a trackear!
						</h3>
					) : (
						<>
							{habitsArray.map((el, i) => (
								<HabitItem key={`habit key ${i}`}>
									<div>
										<h3>{el.name}</h3>
										<div>
											{weekdays.map((e, index) => {
												return (
													<Week
														background={el.days.includes(index)}
														key={index}
													>
														<p>{e}</p>
													</Week>
												);
											})}
										</div>
									</div>
									<div onClick={() => DeleteFunction(el.id)}>
										<ion-icon name="trash-outline"></ion-icon>
									</div>
								</HabitItem>
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
