import Image from "next/image";

import Note from "@/components/Note";
import DriverDRS from "@/components/driver/DriverDRS";
import DriverTire from "@/components/driver/DriverTire";
import DriverPedals from "@/components/driver/DriverPedals";
import TemperatureComplication from "@/components/complications/Temperature";
import HumidityComplication from "@/components/complications/Humidity";
import WindSpeedComplication from "@/components/complications/WindSpeed";
import RainComplication from "@/components/complications/Rain";

import unknownTireIcon from "public/tires/unknown.svg";
import mediumTireIcon from "public/tires/medium.svg";
import interTireIcon from "public/tires/intermediate.svg";
import hardTireIcon from "public/tires/hard.svg";
import softTireIcon from "public/tires/soft.svg";
import wetTireIcon from "public/tires/wet.svg";

export default function HelpPage() {
	return (
		<div>
			<h1 className="my-4 text-3xl">Страница справки</h1>

			<p>Здесь вы найдёте описание основных функций и компонентов интерфейса.</p>

			<h2 className="my-4 text-2xl">Цвета</h2>

			<p>
				Ключевым элементом интерфейса Дашборда F1 Kazakhstan, является система цветовой индикации, используемая для отображения времени круга, секторов,
				мини-секторов и отставаний. Каждый цвет имеет своё значение в контексте времени круга, сектора или мини-сектора.
			</p>

			<div className="my-4 flex flex-col">
				<div className="flex gap-1">
					<p className="flex items-center gap-1">
						<span className="size-4 rounded-md bg-white" /> Белый
					</p>
					<p>Время последнего круга</p>
				</div>

				<div className="flex gap-1">
					<p className="flex items-center gap-1 text-yellow-500">
						<span className="size-4 rounded-md bg-amber-400" /> Желтый
					</p>
					<p>Хуже личного лучшего времени</p>
				</div>

				<div className="flex gap-1">
					<p className="flex items-center gap-1 text-emerald-500">
						<span className="size-4 rounded-md bg-emerald-500" /> Зеленый
					</p>
					<p>Лучшее личное время</p>
				</div>

				<div className="flex gap-1">
					<p className="flex items-center gap-1 text-violet-500">
						<span className="size-4 rounded-md bg-violet-500" /> Фиолетовый
					</p>
					<p>Абсолютно лучшее время</p>
				</div>

				<div className="flex gap-1">
					<p className="flex items-center gap-1 text-blue-500">
						<span className="size-4 rounded-md bg-blue-500" /> Синий
					</p>
					<p>Пилот на пит-лейне</p>
				</div>
			</div>

			{/*
			<Note>
				Only mini sectors use the yellow color. Using yellow for all drivers not improving their lap times would make
				the UI look cluttered, as many text elements would be yellow simultaneously.
			</Note>
			*/}

			<h2 className="my-4 text-2xl">Таблица лидеров</h2>

			<p className="mb-4">
				В таблице лидеров отображаются все пилоты текущей сессии. В зависимости от их статуса и этапа сессии, фон у некоторых пилотов может быть окрашен.
			</p>

			<div className="grid grid-cols-1 gap-x-4 divide-y divide-zinc-800 sm:grid-cols-3 sm:divide-y-0">
				<div>
					<p className="rounded-md bg-violet-800/30 p-2">У пилота фиолетовый фон</p>
					<p className="p-2">У пилота лучшее время круга</p>
				</div>

				<div className="pt-4 sm:pt-0">
					<p className="rounded-md border p-2 opacity-50">Пилот немного прозрачный</p>
					<p className="p-2">Пилот выбыл из сессии (авария или сход)</p>
				</div>

				<div className="pt-4 sm:pt-0">
					<p className="rounded-md bg-red-800/30 p-2">У пилота красный фон</p>
					<p className="p-2">Пилот под угрозой вылета в квалификации</p>
				</div>
			</div>

			<h2 className="my-4 text-2xl">Статус DRS и пит-стопов</h2>

			<p className="mb-4">
				Каждый пилот в таблице имеет индикатор DRS и пит-статуса, который показывает активен ли у пилота DRS, 
				может ли он его использовать, и так далее.
				
			</p>

			<p className="mb-4">
				В целом это даёт представление о том, собирается ли пилот заехать в боксы и может потерять позиции, либо имеет DRS и шанс на обгон пилота впереди.
			</p>

			<div className="mb-4 flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<div className="w-[4rem]">
						<DriverDRS on={false} possible={false} inPit={false} pitOut={false} />
					</div>

					<p>Нет DRS (по умолчанию)</p>
				</div>

				<div className="flex items-center gap-2">
					<div className="w-[4rem]">
						<DriverDRS on={false} possible={true} inPit={false} pitOut={false} />
					</div>

					<p>Имеет право на DRS в следующей зоне</p>
				</div>

				<div className="flex items-center gap-2">
					<div className="w-[4rem]">
						<DriverDRS on={true} possible={false} inPit={false} pitOut={false} />
					</div>

					<p>DRS Активен</p>
				</div>

				<div className="flex items-center gap-2">
					<div className="w-[4rem]">
						<DriverDRS on={false} possible={false} inPit={true} pitOut={false} />
					</div>

					<p>На пит-лейне или выезжает с него</p>
				</div>
			</div>

			<h2 className="my-4 text-2xl">Шины</h2>

			<p className="mb-4">
				Мы также отображаем информацию о типах шин, которые использует пилот, и количество кругов, пройденных на них. <br />
				В примере указано что у пилота мягкий комплект шин, на котором он проехал 12 кругов, и он один раз заезжал в боксы.
			</p>

			<div className="mb-4">
				<DriverTire
					stints={[
						{ totalLaps: 12, compound: "SOFT" },
						{ totalLaps: 12, compound: "SOFT", new: "TRUE" },
					]}
				/>
			</div>

			<p className="mb-4">Ниже различные иконки для разных составов шин:</p>

			<div className="mb-4 flex flex-wrap gap-4">
				<div className="flex items-center gap-2">
					<Image src={softTireIcon} alt="soft" className="size-8" />
					<p>Мягкие</p>
				</div>

				<div className="flex items-center gap-2">
					<Image src={mediumTireIcon} alt="medium" className="size-8" />
					<p>Средние</p>
				</div>

				<div className="flex items-center gap-2">
					<Image src={hardTireIcon} alt="hard" className="size-8" />
					<p>Жесткие</p>
				</div>

				<div className="flex items-center gap-2">
					<Image src={interTireIcon} alt="intermediate" className="size-8" />
					<p>Промежуточные</p>
				</div>

				<div className="flex items-center gap-2">
					<Image src={wetTireIcon} alt="wet" className="size-8" />
					<p>Дождевые</p>
				</div>

				<div className="flex items-center gap-2">
					<Image src={unknownTireIcon} alt="unknown" className="size-8" />
					<p>Неизвестно</p>
				</div>
			</div>

			<Note className="mb-4">
				Иногда тип шин неизвестен. Это может происходить в начале сессии или при сбое в данных.
			</Note>

			<h2 className="my-4 text-2xl">Управление задержкой</h2>

			<p className="mb-4">
				При использовании Дашборда во время просмотра гонок по телевизору, или на стриминговой
				платформе :) вы можете заметить, что Дашборд обновляется значительно раньше, чем трансляция. Это может испортить впечатление от захватывающих моментов гонки, так как вы увидите их на Дашборде
				раньше, чем на экране. В таких случаях и пригодится функция управления задержкой.
			</p>

			<p className="mb-4">
				 С помощью управления задержкой вы можете установить задержку в секундах, чтобы Дашборд обновлялся чуть позже, чем сервер получает данные. Например,
				при установке задержки в 30 секунд Дашборд будет показывать данные с опозданием в 30 секунд.
				<br />
				Вы можете использовать эту функцию, чтобы синхронизировать вашу видео трансляцию с Дашбордом.
			</p>

			{/*
			<Note className="mb-4">
				Currently you can only set a delay that is the time you have been on the dashboard page. So 30s on a 20s page
				visit makes you wait 10s until playback of the updates resumes. (This will be changed in the future)
			</Note>
			*/}

			<h3 className="my-4 text-xl">На что обращать внимание при синхронизации?</h3>

			<ul className="list ml-6 list-disc">
				<li>
					Начало нового круга <span className="text-zinc-500">(гонка)</span>
				</li>
				<li>
					Таймер сессии <span className="text-zinc-500">(практика, квалификация)</span>
				</li>
				<li>Если доступны мини-сектора</li>
			</ul>

			<h2 className="my-4 text-2xl">Педали Пилота</h2>

			<div className="mb-4 flex flex-col gap-4">
				<div className="flex items-center gap-6">
					<div className="w-[4rem]">
						<DriverPedals className="bg-red-500" value={1} maxValue={3} />
					</div>

					<p>
						Показывает, тормозит ли пилот <span className="text-zinc-500">(вкл / выкл)</span>
					</p>
				</div>

				<div className="flex items-center gap-6">
					<div className="w-[4rem]">
						<DriverPedals className="bg-emerald-500" value={3} maxValue={4} />
					</div>

					<p>
						Показывает, насколько сильно пилот нажимает на педаль газа <span className="text-zinc-500">(0-100%)</span>
					</p>
				</div>

				<div className="flex items-center gap-6">
					<div className="w-[4rem]">
						<DriverPedals className="bg-blue-500" value={2} maxValue={3} />
					</div>

					<p>
						Показывает обороты двигателя <span className="text-zinc-500">(0 - 15&apos;000)</span>
					</p>
				</div>
			</div>

			<h2 className="my-4 text-2xl">Погода</h2>

			<div className="mb-4 flex flex-col gap-2">
				<div className="flex flex-row items-center gap-2">
					<TemperatureComplication value={39} label="ТРС" />
					<p>Отображает текущую температуру трассы.</p>
				</div>

				<div className="flex flex-row items-center gap-2">
					<TemperatureComplication value={26} label="ВЗДХ" />
					<p>Отображает текущую температуру воздуха.</p>
				</div>

				<div className="flex flex-row items-center gap-2">
					<HumidityComplication value={36} />
					<p>Отображает текущую влажность.</p>
				</div>

				<div className="flex flex-row items-center gap-2">
					<RainComplication rain={true} />
					<p>Отображает идет ли сейчас дождь.</p>
				</div>

				<div className="flex flex-row items-center gap-2">
					<WindSpeedComplication speed={2.9} directionDeg={250} />
					<p>Отображает скорость и направление ветра в данный момент.</p>
				</div>
			</div>
		</div>
	);
}
