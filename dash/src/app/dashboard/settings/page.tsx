"use client";

import SegmentedControls from "@/components/ui/SegmentedControls";
import Button from "@/components/ui/Button";
import Slider from "@/components/ui/Slider";
import Input from "@/components/ui/Input";

import FavoriteDrivers from "@/components/settings/FavoriteDrivers";

import DelayInput from "@/components/DelayInput";
import DelayTimer from "@/components/DelayTimer";
import Toggle from "@/components/ui/Toggle";

import { useSettingsStore } from "@/stores/useSettingsStore";
import Footer from "@/components/Footer";

export default function SettingsPage() {
	const settings = useSettingsStore();
	return (
		<div>
			<h1 className="mb-4 text-3xl">Настройки</h1>

			<h2 className="my-4 text-2xl">Визуальные настройки</h2>

			<div className="flex gap-2">
				<Toggle enabled={settings.carMetrics} setEnabled={(v) => settings.setCarMetrics(v)} />
				<p className="text-zinc-500">Отображать параметры болида (обороты, передача, скорость)</p>
			</div>

			<div className="flex gap-2">
				<Toggle enabled={settings.showCornerNumbers} setEnabled={(v) => settings.setShowCornerNumbers(v)} />
				<p className="text-zinc-500">Показать номера поворотов на схеме трассы</p>
			</div>

			<div className="flex gap-2">
				<Toggle enabled={settings.tableHeaders} setEnabled={(v) => settings.setTableHeaders(v)} />
				<p className="text-zinc-500">Показать заголовок таблицы пилотов</p>
			</div>

			<div className="flex gap-2">
				<Toggle enabled={settings.showBestSectors} setEnabled={(v) => settings.setShowBestSectors(v)} />
				<p className="text-zinc-500">Отображать лучшие сектора пилотов</p>
			</div>

			<div className="flex gap-2">
				<Toggle enabled={settings.showMiniSectors} setEnabled={(v) => settings.setShowMiniSectors(v)} />
				<p className="text-zinc-500">Показать мини-сектора пилотов</p>
			</div>

			<div className="flex gap-2">
				<Toggle enabled={settings.oledMode} setEnabled={(v) => settings.setOledMode(v)} />
				<p className="text-zinc-500">OLED-режим (абсолютно чёрный фон)</p>
			</div>

			<div className="flex gap-2">
				<Toggle enabled={settings.useSafetyCarColors} setEnabled={(v) => settings.setUseSafetyCarColors(v)} />
				<p className="text-zinc-500">Использовать цвета сейфти-кара</p>
			</div>

			<h2 className="my-4 text-2xl">Дирекция гонки</h2>

			<div className="flex gap-2">
				<Toggle enabled={settings.raceControlChime} setEnabled={(v) => settings.setRaceControlChime(v)} />
				<p className="text-zinc-500">Звук при новом сообщении от дирекции гонки</p>
			</div>

			{settings.raceControlChime && (
				<div className="flex flex-row items-center gap-2">
					<Input
						value={String(settings.raceControlChimeVolume)}
						setValue={(v) => {
							const numericValue = Number(v);
							if (!isNaN(numericValue)) {
								settings.setRaceControlChimeVolume(numericValue);
							}
						}}
					/>
					<Slider
						className="!w-52"
						value={settings.raceControlChimeVolume}
						setValue={(v) => settings.setRaceControlChimeVolume(v)}
					/>

					<p className="text-zinc-500">Громкость сигнала при сообщениях дирекции</p>
				</div>
			)}

			<h2 className="my-4 text-2xl">Избранные пилоты</h2>

			<p className="mb-4">Выберите любимых пилотов для их выделения на дашборде.</p>

			<FavoriteDrivers />

			<h2 className="my-4 text-2xl">Формат скорости</h2>

			<p className="mb-4">Укажите единицы измерения скорости.</p>

			<SegmentedControls
				id="speed-unit"
				selected={settings.speedUnit}
				onSelect={settings.setSpeedUnit}
				options={[
					{ label: "км/ч", value: "metric" },
					{ label: "миль/ч", value: "imperial" },
				]}
			/>

			<h2 className="my-4 text-2xl">Задержка</h2>

			<p className="mb-4">
				Здесь вы можете задать задержку для данных — они будут отображаться с указанным
				количеством секунд опоздания относительно «живого» потока. На странице панели управления
				есть такое же поле для ввода задержки, чтобы вы могли настроить её, не переходя в настройки. Оно находится в верхней панели справа.
			</p>

			<div className="flex items-center gap-2">
				<DelayTimer />
				<DelayInput />
				<p className="text-zinc-500">Задержка в секундах</p>
			</div>

			<Button className="mt-2 bg-red-500!" onClick={() => settings.setDelay(0)}>
				Сбросить
			</Button>

			<Footer />
		</div>
	);
}
