import TypewriterEffect from 'typewriter-effect';

const Typewriter = () => {
	return (
		<h1 className="font-bold flex text-[26px] justify-center lg:text-[64px] w-full lg:w-5/6 text-center text-white">
            <span className='mr-1'>Always</span>
			<TypewriterEffect
				options={{
					strings: ['Junior dev', 'learning', 'As a student', 'Never stop'],
					autoStart: true,
					loop: true,
                    delay: 100
				}}
			/>

		</h1>
	);
};

export default Typewriter;
