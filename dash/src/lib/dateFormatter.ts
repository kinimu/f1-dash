import { utc } from "moment";
import { translateMonth } from "@/lib/translations";

export const formatMonth = (start: string, end: string): string => {
	const startM = utc(start).local();
	const endM = utc(end).local();

	const sameMonth = startM.format("MMMM") === endM.format("MMMM");
	return sameMonth ? translateMonth(startM.format("MMMM")) : `${translateMonth(startM.format("MMM"))} - ${translateMonth(endM.format("MMM"))}`;
};

export const formatDayRange = (start: string, end: string): string => {
	return `${utc(start).local().format("D")}-${utc(end).local().format("D")}`;
};
