import { motion } from 'framer-motion';

const Circle = () => {
	return (
		<div className="absolute z-[2] bottom-4 -left-[30%] md:bottom-8 md:-left-32">
			<div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
				
				<div className="absolute top-0 left-0 w-full h-full">
					<img src="circle/circle1.png" alt="circle" className="w-full h-full object-contain opacity-60" />
					
					<motion.div
						className="absolute inset-0"
						animate={{ rotate: 360 }}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: "linear"
						}}
					>
						<motion.img
							src="circle/star.png"
							alt="star"
							className="absolute top-[26px] right-16 w-6 h-6 md:w-8 md:h-8 rotate-[16deg]"
							animate={{ opacity: [0, 1, 1, 0, 0] }}
							transition={{
								duration: 8,
								times: [0, 0.1, 0.5, 0.55, 1],
								repeat: Infinity
							}}
						/>
					</motion.div>
				</div>

				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]">
					<img src="circle/circle2.png" alt="circle" className="w-full h-full object-contain opacity-60" />
					
					<motion.div
						className="absolute inset-0"
						animate={{ rotate: 360 }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "linear",
							delay: 0.5
						}}
					>
						<motion.img
							src="circle/star.png"
							alt="star"
							className="absolute top-[10px] right-14 w-6 h-6 md:w-8 md:h-8 rotate-[16deg]"
							animate={{ opacity: [0, 1, 1, 0, 0] }}
							transition={{
								duration: 8,
								times: [0, 0.1, 0.5, 0.55, 1],
								repeat: Infinity,
								delay: 0.5
							}}
						/>
					</motion.div>
				</div>

				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%]">
					<img src="circle/circle3.png" alt="circle" className="w-full h-full object-contain opacity-60" />
					
					<motion.div
						className="absolute inset-0"
						animate={{ rotate: 360 }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "linear",
							delay: 1
						}}
					>
						<motion.img
							src="circle/star.png"
							alt="star"
							className="absolute top-[-2px] right-14 w-6 h-6 md:w-8 md:h-8 rotate-[16deg]"
							animate={{ opacity: [0, 1, 1, 0, 0] }}
							transition={{
								duration: 4,
								times: [0, 0.1, 0.5, 0.55, 1],
								repeat: Infinity,
								delay: 1
							}}
						/>
					</motion.div>
				</div>

				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%]">
					<img src="circle/circle4.png" alt="circle" className="w-full h-full object-contain opacity-60" />
					
					<motion.div
						className="absolute inset-0"
						animate={{ rotate: 360 }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "linear",
							delay: 1.5
						}}
					>
						<motion.img
							src="circle/star.png"
							alt="star"
							className="absolute top-[-12px] right-14 w-6 h-6 md:w-8 md:h-8 rotate-[16deg]"
							animate={{ opacity: [0, 1, 1, 0, 0] }}
							transition={{
								duration: 4,
								times: [0, 0.1, 0.5, 0.55, 1],
								repeat: Infinity,
								delay: 1.5
							}}
						/>
					</motion.div>
				</div>

			</div>
		</div>
	);
};

export default Circle;