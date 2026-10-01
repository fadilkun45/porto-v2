import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Clapp = () => {
	return (
		<motion.div
			className="bg-[#FFC517] cursor-pointer rounded-full overflow-hidden flex items-center"
			initial={{ width: '64px', height: '64px' }}
			animate={{
				width: ['64px', '330px', '330px', '64px'],
				height: '64px',
			}}
			transition={{
				duration: 4,
				times: [0, 0.125, 0.875, 1],
				repeat: Infinity,
				repeatDelay: 1,
				ease: 'easeInOut',
			}}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
		>
			<div className="flex items-center h-full">
				<motion.div
					className="bg-[#EBDEBC] rounded-full text-2xl flex-shrink-0 w-12 h-12 flex items-center justify-center ml-1.5"
					animate={{
						rotate: [0, 14, -8, 14, -4, 10, 0, 0],
					}}
					transition={{
						duration: 2.5,
						repeat: Infinity,
						repeatDelay: 1,
						ease: 'easeInOut',
					}}
				>
					👋
				</motion.div>

				<motion.span
					className="font-bold text-white text-lg lg:text-xl whitespace-nowrap ml-4 mr-6"
					animate={{
						opacity: [0, 1, 1, 0],
						x: [-20, 0, 0, -20],
					}}
					transition={{
						duration: 4,
						times: [0, 0.125, 0.875, 1],
						repeat: Infinity,
						repeatDelay: 1,
						ease: 'easeInOut',
					}}
				>
					Hi, I'm Faldi Ramadhan
				</motion.span>
			</div>
		</motion.div>
	);
};

export default Clapp;
