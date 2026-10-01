import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
	{
		name: 'Main Skills (Frontend Development)',
		items: [
			{ label: 'HTML', src: '/icons/html.svg' },
			{ label: 'CSS', src: '/icons/css.svg' },
			{ label: 'Javascript', src: '/icons/js.svg' },
			{ label: 'NextJS', src: '/icons/nextjs.svg' },
			{ label: 'ReactJS', src: '/icons/react.svg' },
			{ label: 'VueJS', src: '/icons/vue.svg' },
			{ label: 'React Native', src: '/icons/reactnative.svg' },
			{ label: 'Expo', src: '/icons/expo.svg' },
			{ label: 'Flutter', src: '/icons/flutter.svg' },
			{ label: 'Tailwind CSS', src: '/icons/tailwind.svg' },
			{ label: 'Chakra UI', src: '/icons/chakra.svg' },
			{ label: 'Bootstrap', src: '/icons/bootstrap.svg' },
			{ label: 'Material UI', src: '/icons/mui.svg' },
			{ label: 'TypeScript', src: '/icons/ts.svg' },
		],
	},
	{
		name: 'Server Infrastructure',
		items: [
			{ label: 'Jenkins', src: '/icons/reactnative.svg' },
			{ label: 'Ubuntu', src: '/icons/reactnative.svg' },
			{ label: 'Debian', src: '/icons/reactnative.svg' },
			{ label: 'Armbian', src: '/icons/reactnative.svg' },
			{ label: 'Gitlab CI', src: '/icons/reactnative.svg' },
		],
	},
	{
		name: 'Other Skills',
		items: [
			{ label: 'Firebase', src: '/icons/reactnative.svg' },
			{ label: 'ExpressJS', src: '/icons/reactnative.svg' },
			{ label: 'Graphql', src: '/icons/reactnative.svg' },
			{ label: 'MongoDB', src: '/icons/reactnative.svg' },
		],
	},
	{
		name: 'Tools',
		items: [
			{ label: 'Gitlab', src: '/icons/reactnative.svg' },
			{ label: 'Github', src: '/icons/reactnative.svg' },
			{ label: 'BitBucket', src: '/icons/reactnative.svg' },
			{ label: 'Vscode', src: '/icons/reactnative.svg' },
			{ label: 'Postman', src: '/icons/reactnative.svg' },
			{ label: 'Figma', src: '/icons/reactnative.svg' },
		],
	},
];

export default function Skills() {
	const [active, setActive] = useState(0);

	return (
		<div className="flex flex-col gap-8 items-center w-full">

			<div className="w-full overflow-x-auto [scrollbar-width:none] lg:w-fit lg:overflow-visible [&::-webkit-scrollbar]:hidden">
				<div className="flex w-max gap-3 lg:gap-6 lg:rounded-full lg:border lg:border-[#DDDDDD] lg:p-2 lg:dark:border-[#3A3A3A]">
					{categories.map((c, i) => (
						<button
							key={i}
							onClick={(e) => {
								setActive(i);
								e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
							}}
							className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 transition lg:border-transparent ${active === i ? 'border-[#5476CC] bg-[#E8EFFE] text-[#5476CC] dark:border-[#FFC517] dark:bg-[#FFC5171A] dark:text-[#FFC517] lg:dark:border-[#FFC517]' : 'border-[#DDDDDD] text-[#787878] dark:border-[#3A3A3A] dark:text-[#BBBBBB]'}`}
						>
							{c.name}
						</button>
					))}
				</div>
			</div>

			<motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="flex gap-x-4 gap-y-4 justify-center lg:w-4/6 flex-wrap">
				{categories[active].items.map((item) => (
					<motion.div key={item.label} whileHover={{ scale: 1.05 }} className="flex items-center gap-2 border border-[#DDDDDD] px-4 py-2 rounded-xl bg-white dark:border-[#3A3A3A] dark:bg-transparent">
						<p className="text-[15px] text-[#333333] dark:text-white">{item.label}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
