import styled from "styled-components";

export const CheckButton = styled.div`
	padding: 10px;
	border-radius: 6px;
	font-size: 40px;
	color: #ffffff;
	background-color: ${(props) => (props.background ? "#8FC549" : "#EBEBEB")};

	ion-icon {
		--ionicon-stroke-width: 80px;
	}
`;
