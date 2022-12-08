import React, { useState } from 'react';
import useDarkSide from '../../utils/useDarkSide';
import DarkModeToggle from 'react-dark-mode-toggle';

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
				<DarkModeToggle checked={darkSide} onChange={toggleDarkMode} />
			</div>
		</>
	);
}
