import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import ScrollHint from "@/components/ScrollHint";

import icon from "public/tag-logo.svg";

export default function Home() {
	return (
		<div>
			<section className="flex h-screen w-full flex-col items-center pt-20 sm:justify-center sm:pt-0">
				<Image src={icon} alt="f1-dash tag logo" width={600} />

				<h1 className="my-20 text-center text-5xl font-bold">
					Формула 1 <br />
					телеметрия и тайминги в реальном времени
				</h1>

				<div className="flex flex-wrap gap-4">
					<Link href="/dashboard">
						<Button className="rounded-xl! border-2 border-transparent p-4 font-medium">Дашборд</Button>
					</Link>

					<Link href="/schedule">
						<Button className="rounded-xl! border-2 border-zinc-700 bg-transparent! p-4 font-medium">
							Расписание Гонок
						</Button>
					</Link>
				</div>

				<ScrollHint />
			</section>

			<section className="pb-20">
				<h2 className="mb-4 text-2xl">Что это такое?</h2>

				<p className="text-md">
					Это Дашборд который показывает телеметрию и тайминги в реальном времени во время гонок Формулы 1.
					Вы можете следить за временем кругов, секторами, отставанием между пилотами, выбором шин и другими важными данными прямо во время заезда.
				</p>
			</section>

			{/*
			<section className="pb-20">
				<h2 className="mb-4 text-2xl">И как?</h2>

				<p className="text-md">
					Надеюсь получится.
				</p>
			</section>
			*/}
		</div>
	);
}