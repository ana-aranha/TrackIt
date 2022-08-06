import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<FooterPage>
			<Link to={"/habitos"}>
				<p>hábitos</p>
			</Link>
			<Link to={"/hoje"}>
				<p>Hoje</p>
			</Link>
			<p>Histórico</p>
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
	align-items: center;
	padding: 0 10%;

	p {
		font-weight: 400;
		font-size: 23px;
		color: #52b6ff;
	}

	a:link {
		text-decoration: none;
	}
`;
