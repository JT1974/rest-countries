import React, { useState } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	height: 5rem;
	width: 100vw;
	background-color: var(--elements-color);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 clamp(1rem, 5vw, 5rem);
	box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.03);
	z-index: 3;
`

const Wrapper = styled.div`
	width: 100%;
	max-width: 90rem;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Title = styled.h1`
	font-weight: var(--font-weight-bold);
	font-size: 1rem;
	color: var(--text-color);
`
const DarkModeSwitch = styled.span`
	font-size: var(--homepage-font-size);
	font-weight: var(--font-weight-semibold);
	color: var(--text-color);
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.625rem;
	cursor: pointer;

	ion-icon {
		font-size: 1.2rem;
		color: var(--text-color);
		cursor: pointer;
	}
`

export default function Header() {
	const [darkmodeIsOn, setDarkmodeIsOn] = useState(false)

	const toggleDarkmode = () => {
		setDarkmodeIsOn(prevDarkmodeIsOn => !prevDarkmodeIsOn)

		darkmodeIsOn ? document.body.classList.remove('darkmode') : document.body.classList.add('darkmode')
	}

	return (
		<HeaderContainer>
			<Wrapper>
				<Title>Where in the world?</Title>
				<DarkModeSwitch onClick={() => toggleDarkmode()}>
					<ion-icon name={`moon${darkmodeIsOn ? '' : '-outline'}`}></ion-icon>
					Dark Mode
				</DarkModeSwitch>
			</Wrapper>
		</HeaderContainer>
	)
}

