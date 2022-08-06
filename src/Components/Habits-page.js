import UserContext from "./contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { GetHabits } from "./Services/Trackit";
import { HabitsStyle } from "./Today-page";
import Top from "./Top-page";
import Footer from "./Footer-page";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function HabitsPage() {
	const { conf, dataLogin } = useContext(UserContext);
	const navigate = useNavigate();
	const [habitsArray, setHabitsArray] = useState("");
	const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

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

	return (
		<>
			<Top />
			{habitsArray !== "" ? (
				<HabitsStyle>
					<div>
						<h2>Meus hábitos</h2>
						<ButtonConfirm>
							<p onClick={() => console.log("cliquei")}>+</p>
						</ButtonConfirm>
					</div>
					{habitsArray.length === 0 ? (
						<h3>
							Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
							para começar a trackear!
						</h3>
					) : (
						habitsArray.map((el, i) => (
							<HabitItem key={i}>
								<div>
									<p>{el.name}</p>
									<div>
										{weekdays.map((e, index) => {
											return (
												<Week background={el.days.includes(index)}>
													<p key={index}>{e}</p>
												</Week>
											);
										})}
									</div>
								</div>
								<div>
									<ion-icon name="trash-outline"></ion-icon>
								</div>
							</HabitItem>
						))
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
			<Footer />
		</>
	);
}

const ButtonConfirm = styled.div`
	background-color: #52b6ff;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;

	p {
		color: #ffffff;
		font-size: 23px;
		margin: 6px 15px;
	}
`;

const HabitItem = styled.div`
	padding: 15px;
	background-color: #ffffff;
	border-radius: 5px;
	margin-top: 20px;
	color: #666666;
	font-size: 18px;
	font-weight: 400;

	> div {
		display: flex;
		flex-direction: column;
	}

	div:last-child {
		display: flex;
	}
`;

const Week = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px 10px;
	margin: 20px 10px 0 0;
	width: 35px;
	border-radius: 5px;
	border: 1px solid #cfcfcf;
	color: ${(props) => (props.background ? `#ffffff` : `#cfcfcf`)};
	background-color: ${(props) => (props.background ? `#cfcfcf` : `#ffffff`)};
`;
