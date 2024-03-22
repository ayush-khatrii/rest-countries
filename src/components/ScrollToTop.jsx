import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollValue = () => {
		setIsVisible(window.scrollY > 100);
	};
	useEffect(() => {
		scrollValue();
		window.addEventListener("scroll", scrollValue);

		return () => {
			window.removeEventListener("scroll", scrollValue);
		};
	}, []);

	return (
		<>
			{isVisible && (
				<button onClick={handleScroll} className='fixed bottom-7 right-10 z-50 '>
					<FaAngleUp className='   bg-zinc-900 text-zinc-300 border border-zinc-600 rounded-full size-8 p-1' />
				</button>
			)}
		</>
	);
};

export default ScrollToTop;
