type StatusMessage = {
	message: string;
	color: string;
	trackColor: string;
	bySector?: boolean;
	pulse?: number;
	hex: string;
};

type MessageMap = {
	[key: string]: StatusMessage;
};

export const getTrackStatusMessage = (statusCode: number | undefined): StatusMessage | null => {
	const messageMap: MessageMap = {
		1: { message: "Трасса в порядке", color: "bg-emerald-500", trackColor: "stroke-white", hex: "#34b981" },
		2: {
			message: "Желтый Флаг",
			color: "bg-amber-400",
			trackColor: "stroke-amber-400",
			bySector: true,
			hex: "#fbbf24",
		},
		3: { message: "Флаг", color: "bg-amber-400", trackColor: "stroke-amber-400", bySector: true, hex: "#fbbf24" },
		4: { message: "Машина Безопасности", color: "bg-amber-400", trackColor: "stroke-amber-400", hex: "#fbbf24" },
		5: { message: "Красный Флаг", color: "bg-red-500", trackColor: "stroke-red-500", hex: "#ef4444" },
		6: { message: "VSC Выпущен", color: "bg-amber-400", trackColor: "stroke-amber-400", hex: "#fbbf24" },
		7: { message: "VSC Заканчивается", color: "bg-amber-400", trackColor: "stroke-amber-400", hex: "#fbbf24" },
	};

	return statusCode ? (messageMap[statusCode] ?? messageMap[0]) : null;
};
