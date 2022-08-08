import * as dayjs from "dayjs";
import "dayjs/locale/pt";

export default function getDate() {
	const customParseFormat = require("dayjs/plugin/customParseFormat");
	dayjs.extend(customParseFormat);
	const today = dayjs().locale("pt").format("dddd, DD/MM");
	return today.charAt(0).toUpperCase() + today.slice(1);
}
