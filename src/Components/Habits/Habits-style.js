import styled from "styled-components";

export const HabitsStyle = styled.div`
	margin: 120px 30px;

	h2 {
		font-weight: 400;
		font-size: 23px;
		color: #126ba5;
	}
	h3 {
		margin-top: 30px;
		color: #666666;
		font-size: 18px;
		font-weight: 400;
	}

	> div {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	h4 {
		margin-top: 10px;
		font-size: 18px;
		font-weight: 400;
	}
`;

export const Message = styled.h4`
	color: ${(props) => (props.color === "true" ? "#8FC549" : `#bababa`)};
`;

export const ButtonConfirm = styled.div`
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

export const HabitItem = styled.div`
	padding: 15px;
	background-color: #ffffff;
	border-radius: 5px;
	margin-top: 20px;
	color: #666666;
	font-weight: 400;

	> div {
		display: flex;
		flex-direction: column;

		p {
			font-size: 15px;
		}

		h3 {
			font-size: 23px;
			margin-top: 0;
			margin-bottom: 10px;
		}

		span {
			color: #8fc549;
		}
	}

	div:last-child {
		display: flex;
	}
`;

export const SpanItem = styled.span`
	color: ${(props) => (props.color === "true" ? "#8FC549" : `#666666`)};
`;

export const Week = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 10px 0 0;
	width: 35px;
	border-radius: 5px;
	border: 1px solid #cfcfcf;
	color: ${(props) => (props.background ? `#ffffff` : `#cfcfcf`)};
	background-color: ${(props) => (props.background ? `#cfcfcf` : `#ffffff`)};

	p {
		margin: 8px 10px;
	}
`;

export const DivButtonHabits = styled.button`
	border-style: none;
	color: #ffffff;
	background-color: ${(props) =>
		props.ColorButton ? `rgba(82, 182, 253, 0.7)` : `rgba(82, 182, 253, 1)`};
	width: 100px;
	height: 50px;
	border-radius: 5px;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const DivButtonCancel = styled.button`
	border-style: none;
	background-color: #ffffff;
	width: 100px;
	height: 50px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	color: rgba(82, 182, 253, 0.7);
`;

export const FormHabits = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	input {
		margin: 5px 0;
		width: 100%;
		height: 50px;
		border-radius: 5px;
		padding-left: 10px;
		font-size: 20px;
		border: 1px solid #d4d4d4;
	}

	div:nth-child(2) {
		display: flex;
		width: 100%;
		justify-content: right;
		gap: 15px;
	}
`;
