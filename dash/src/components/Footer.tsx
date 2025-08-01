// import Link from "next/link";

export default function Footer() {
	return (
		<footer className="my-8 text-sm text-zinc-500">
			<div className="mb-4 flex flex-wrap gap-2">
				{/*
				<p>
					Сделано в <TextLink website="https://gadgetpark.kz">Gadget Park</TextLink>.
				</p>
				*/}

				

				<p>
					Основной сайт <TextLink website="https://formula1.com.kz">Формула 1 Казахстан</TextLink> пока еще находится в разработке. 
				</p>

				<p>
					А пока что залетайте в  <TextLink website="https://t.me/f1comkz">телегу</TextLink>.
				</p>

				{/*
				<p>
					Справка по сайту{" "}
					<Link className="text-blue-500" href="/help">
						тут
					</Link>
					.
				</p>
				*/}

				<p>Версия: 0.7</p>
			</div>

			<p>
				Этот проект никакого отношения не имеет к официальной Формуле 1. Сделано для любителей гонок таким же любителем. Пока что в одиночку. Можете присоединяться у кого есть желение.
			</p>
		</footer>
	);
}

type TextLinkProps = {
	website: string;
	children: string;
};

const TextLink = ({ website, children }: TextLinkProps) => {
	return (
		<a className="text-blue-500" target="_blank" href={website}>
			{children}
		</a>
	);
};
