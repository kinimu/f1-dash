import { utc } from "moment";

import Round from "@/components/schedule/Round";
import ClientCountdownWrapper from "@/components/schedule/ClientCountdownWrapper";

import { getNextRace } from "@/lib/races";
import { translateString } from "@/lib/translations";

export default async function NextRound() {
	const next = await getNextRace();

	if (!next) {
		return (
			<div className="flex h-44 flex-col items-center justify-center">
				<p>{translateString("No upcoming weekend found")}</p>
			</div>
		);
	}

	const nextSession = next.sessions.filter((s) => utc(s.start) > utc() && s.kind.toLowerCase() !== "race")[0];
	const nextRace = next.sessions.find((s) => s.kind.toLowerCase() == "race");

	return (
		<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
			{nextSession || nextRace ? (
				<ClientCountdownWrapper nextSession={nextSession} nextRace={nextRace} />
			) : (
				<div className="flex flex-col items-center justify-center">
					<p>{translateString("No upcoming sessions found")}</p>
				</div>
			)}

			<Round round={next} />
		</div>
	);
}