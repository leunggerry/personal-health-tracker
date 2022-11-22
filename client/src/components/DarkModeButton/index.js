import React, { useState } from 'react';
import useDarkSide from '../../utils/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === 'light' ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<div>
				<DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} />
				{/* <h3 className="text-gray-800 dark:text-gray-300 pt-4">
					{colorTheme === 'light' ? 'Dark mode' : 'light mode'}
				</h3> */}
			</div>
		</>
	);
}
