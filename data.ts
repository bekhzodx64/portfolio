import { IService, ISkill, IProject } from './type';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { BsCircleFill } from 'react-icons/bs';

export const services: IService[] = [
	{
		Icon: AiOutlineHtml5,
		title: 'Верстка',
		about:
			'Верстка страниц за короткие сроки используя <b>HTML</b>, <b>CSS</b> и <b>JavaScript</b>.',
	},
	{
		Icon: FaReact,
		title: 'Front-End',
		about:
			'Создание веб приложении с красивым интерфейсом используя <b>React.js</b> и <b>Next.js</b>.',
	},
	{
		Icon: FaNodeJs,
		title: 'Back-End',
		about: 'В процессе <b>Node.js</b> и <b>MongoDB</b>.',
	},
	{
		Icon: FaReact,
		title: 'React Native',
		about: 'Скоро...',
	},
];

export const languages: ISkill[] = [
	{
		name: 'React',
		level: '40%',
		Icon: BsCircleFill,
	},
	{
		name: 'Next.js',
		level: '30%',
		Icon: BsCircleFill,
	},
	{
		name: 'JavaScript',
		level: '40%',
		Icon: BsCircleFill,
	},
	{
		name: 'Tailwindcss',
		level: '85%',
		Icon: BsCircleFill,
	},
	{
		name: 'Bootstrap',
		level: '70%',
		Icon: BsCircleFill,
	},
];

export const tools: ISkill[] = [
	{
		name: 'Figma',
		level: '70%',
		Icon: BsCircleFill,
	},
	{
		name: 'Photoshop',
		level: '60%',
		Icon: BsCircleFill,
	},
	{
		name: 'Illustrator',
		level: '40%',
		Icon: BsCircleFill,
	},
	{
		name: 'Zeplin',
		level: '80%',
		Icon: BsCircleFill,
	},
];

export const projects: IProject[] = [
	{
		id: 1,
		name: 'Mogo',
		description:
			'Мой второй сайт который сверстал при просмотре видеоурока в yotube-е во времена обучении веб разработке. Обычная лендинг страница.',
		image_path: '/images/mogo.png',
		deployed_url: 'https://bekhzodx64.github.io/mogo/',
		github_url: 'https://github.com/bekhzodx64/mogo',
		category: ['html'],
		key_techs: ['HTML', 'CSS'],
	},
	{
		id: 2,
		name: 'Yangi Hayot',
		description:
			'Сайт был сверстан с помощью фреймворка Tailwindcss. Адаптирован под мобильные усстройство.',
		image_path: '/images/new-life.png',
		deployed_url: 'https://bekhzodx64.github.io/yangi-hayot/',
		github_url: 'https://github.com/bekhzodx64/yangi-hayot',
		category: ['html'],
		key_techs: ['HTML', 'CSS', 'Tailwindcss'],
	},
	{
		id: 3,
		name: 'Tesla',
		description:
			'Клон официального сайта Tesla. Это страница была сверстана во время изучения фреймворка Tailwindcss.',
		image_path: '/images/tesla.png',
		deployed_url: 'https://bekhzodx64.github.io/tesla/',
		github_url: 'https://github.com/bekhzodx64/tesla',
		category: ['html'],
		key_techs: ['HTML', 'CSS', 'Tailwindcss'],
	},
	{
		id: 4,
		name: 'ESB UZ',
		description:
			'ESBUZ сайт где в основном продают насосы, в данный момент сайт в рабочем состоянии.',
		image_path: '/images/esb.png',
		deployed_url: 'https://esbuz.uz/',
		github_url: 'https://github.com/bekhzodx64/esbuz',
		category: ['html'],
		key_techs: ['HTML', 'Tailwindcss'],
	},
	{
		id: 5,
		name: 'Food',
		description:
			'Веб приложение (SPA) которое было создано во время обучение React. Использовал FoodApi.',
		image_path: '/images/food.png',
		deployed_url: 'https://bekhzodx64.github.io/react-food/',
		github_url: 'https://github.com/bekhzodx64/react-food',
		category: ['react'],
		key_techs: ['HTML', 'CSS', 'React'],
	},
	{
		id: 6,
		name: 'Fortnite',
		description:
			'Веб приложение (SPA) которое было создано во время обучение React. Использовал FortniteApi.',
		image_path: '/images/fortnite.png',
		deployed_url: 'https://bekhzodx64.github.io/react-shop/',
		github_url: 'https://github.com/bekhzodx64/react-shop',
		category: ['react'],
		key_techs: ['HTML', 'CSS', 'React'],
	},
	{
		id: 7,
		name: 'Darmon-Diagnostika',
		description: 'Darmon-Diagnostika медицинский центр, сайт работает в штатном режиме.',
		image_path: '/images/darmon-diagnostika.png',
		deployed_url: 'https://darmon-diagnostika.uz/',
		github_url: 'https://github.com/bekhzodx64/darmon-diagnostika',
		category: ['html'],
		key_techs: ['HTML', 'CSS', 'Sass'],
	},
	{
		id: 8,
		name: 'Rossvik',
		description:
			'Сайт где продают авто запчасти, в данный момент сайт работает в штатном режиме.',
		image_path: '/images/rossvik.png',
		deployed_url: 'https://rossvik.uz/',
		github_url: 'https://github.com/bekhzodx64/rossvik',
		category: ['html'],
		key_techs: ['HTML', 'CSS', 'Sass'],
	},
	{
		id: 9,
		name: 'Дальше-Больше',
		description: 'Сайт где предоставляют услуги для бизнеса.',
		image_path: '/images/dalshe-bolshe.png',
		deployed_url: 'https://dalshe-bolshe.uz/',
		github_url: 'https://github.com/bekhzodx64/db-deploy',
		category: ['html'],
		key_techs: ['HTML', 'CSS', 'Tailwindcss'],
	},
	{
		id: 10,
		name: 'Movie',
		description:
			'Веб приложение (SPA) которое было создано во время обучение React. Быстрый поиск присутствует.',
		image_path: '/images/movie.png',
		deployed_url: 'https://bekhzodx64.github.io/react-project/',
		github_url: 'https://github.com/bekhzodx64/react-project',
		category: ['react'],
		key_techs: ['HTML', 'CSS', 'React'],
	},
	{
		id: 11,
		name: 'Central-beton',
		description: 'Сайт где продают цемент, бетон.',
		image_path: '/images/central-beton.png',
		deployed_url: 'https://bekhzodx64.github.io/central-beton-demo/',
		github_url: 'https://github.com/bekhzodx64/central-beton-demo',
		category: ['html'],
		key_techs: ['HTML', 'CSS', 'Tailwindcss'],
	},
];
