import { motion } from 'framer-motion';

const CircleRight = () => {
	const circles = [
		{ size: '100%', image: 'circle1.png', starPos: 'top-[26px] right-16', duration: 8, delay: 0 },
		{ size: '80%', image: 'circle2.png', starPos: 'top-[10px] right-14', duration: 4, delay: 0.5 },
		{ size: '60%', image: 'circle3.png', starPos: 'top-[-2px] right-14', duration: 4, delay: 1 },
		{ size: '40%', image: 'circle4.png', starPos: 'top-[-12px] right-14', duration: 4, delay: 1.5 },
	];

	return (
		<div className="absolute z-2 top-[100px] -right-[30%] md:bottom-8 md:right-0 overflow-hidden">
			<div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] md:translate-x-32">
				{circles.map((circle, index) => (
					<div
						key={index}
						className={`absolute ${
							index === 0 
								? 'top-0 left-0 w-full h-full' 
								: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
						}`}
						style={{ width: index === 0 ? '100%' : circle.size, height: index === 0 ? '100%' : circle.size }}
					>
						<img 
							src={`circle/${circle.image}`} 
							alt={`circle ${index + 1}`} 
							className="w-full h-full object-contain opacity-60" 
						/>
						
						<motion.div
							className="absolute inset-0"
							animate={{ rotate: -360 }}
							transition={{
								duration: circle.duration,
								repeat: Infinity,
								ease: "linear",
								delay: circle.delay
							}}
						>
							<motion.img
								src="circle/star.png"
								alt="star"
								className={`absolute ${circle.starPos} w-6 h-6 md:w-8 md:h-8 rotate-[16deg]`}
								animate={{ opacity: [0, 1, 1, 0, 0] }}
								transition={{
									duration: circle.duration === 8 ? 8 : 4,
									times: [0, 0.1, 0.5, 0.55, 1],
									repeat: Infinity,
									delay: circle.delay
								}}
							/>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CircleRight;