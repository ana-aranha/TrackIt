import Top from "./Top-page";
import Footer from "./Footer-page";
import { HabitsStyle } from "./Habits/Habits-style";

export default function History() {
	return (
		<>
			<Top />
			<HabitsStyle>
				<h2>Histórico</h2>
				<h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
			</HabitsStyle>
			<Footer />
		</>
	);
}
