import UserContext from "./contexts/UserContext";
import { useContext } from "react";
import styled from "styled-components";

export default function Top() {
	const { dataLogin } = useContext(UserContext);

	return (
		<TopPage>
			<h1>TrackIt</h1>
			<img src={dataLogin.image} alt="profileImage" />
		</TopPage>
	);
}

const TopPage = styled.div`
	height: 70px;
	width: 100%;
	background-color: #136ba5;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10%;

	img {
		border-radius: 25px;
		height: 51px;
		width: 51px;
		object-fit: cover;
	}
`;
