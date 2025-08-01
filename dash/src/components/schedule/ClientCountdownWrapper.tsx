"use client";

import dynamic from "next/dynamic";
import type { Session } from "@/types/schedule.type";

const Countdown = dynamic(() => import("@/components/schedule/Countdown"), { ssr: false });

type Props = {
  nextSession: Session | undefined;
  nextRace: Session | undefined;
};

export default function ClientCountdownWrapper({ nextSession, nextRace }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {nextSession && <Countdown next={nextSession} type="other" />}
      {nextRace && <Countdown next={nextRace} type="race" />}
    </div>
  );
}
