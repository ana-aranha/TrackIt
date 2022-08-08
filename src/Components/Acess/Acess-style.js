import styled from "styled-components";

export const PageStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #ffffff;

	img {
		height: 27%;
	}

	p {
		color: #52b6ff;
		font-size: 18px;
		text-decoration: underline;
		margin-top: 25px;
	}
`;

export const DivButton = styled.button`
	border-style: none;
	color: #ffffff;
	background-color: ${(props) =>
		props.ColorButton ? `rgba(82, 182, 253, 0.7)` : `rgba(82, 182, 253, 1)`};
	width: 80%;
	height: 50px;
	border-radius: 5px;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	input {
		margin: 5px 0;
		width: 80%;
		height: 50px;
		border-radius: 5px;
		padding-left: 10px;
		font-size: 20px;
		border: 1px solid #d4d4d4;
	}
`;
