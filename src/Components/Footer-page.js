import styled from "styled-components";
import { Link } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { counterfunction } from "./Services/Trackit";

export default function Footer() {
	const { percentage, SetPercentage, todayHabitsArray } =
		useContext(UserContext);

	const doneHabit = counterfunction(todayHabitsArray);

	if (doneHabit !== 0) {
		SetPercentage(Math.round((doneHabit / todayHabitsArray.length) * 100));
	} else if (doneHabit === 0) {
		SetPercentage(0);
	}

	return (
		<FooterPage>
			<Link to={"/habitos"}>
				<p>hábitos</p>
			</Link>
			<Link to={"/hoje"}>
				<div style={{ width: 100, height: 100 }}>
					<CircularProgressbar
						value={percentage}
						text={"Hoje"}
						background
						backgroundPadding={6}
						styles={buildStyles({
							backgroundColor: "#52b6ff",
							textColor: "#fff",
							pathColor: "#fff",
							trailColor: "transparent",
						})}
					/>
				</div>
			</Link>
			<Link to={"/historico"}>
				<p>Histórico</p>
			</Link>
		</FooterPage>
	);
}

const FooterPage = styled.div`
	height: 70px;
	width: 100%;
	background-color: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 0 10% 2% 10%;

	p {
		font-weight: 400;
		font-size: 23px;
		color: #52b6ff;
		margin-bottom: 20px;
	}

	a:link {
		text-decoration: none;
	}
`;
