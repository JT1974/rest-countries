import React, { useState } from 'react'

export default function Header() {
	const [darkmodeIsOn, setDarkmodeIsOn] = useState(false)

	const toggleDarkmode = () => {
		if (darkmodeIsOn) document.querySelector('.app').classList.remove('darkmode')
		else document.querySelector('.app').classList.add('darkmode')

		setDarkmodeIsOn(prevDarkmodeIsOn => !prevDarkmodeIsOn)
	}

	return (
		<header>
			<h1 className='title'>Where in the world?</h1>
			<span className='dark-mode' onClick={() => toggleDarkmode()}>
				<ion-icon name={`moon${darkmodeIsOn ? '' : '-outline'}`}></ion-icon>
				Dark Mode
			</span>
		</header>
	)
}

