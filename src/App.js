/*
	Your users should be able to:

	See all countries from the API on the homepage
	Search for a country using an input field
	Filter countries by region
	Click on a country to see more detailed information on a separate page
	Click through to the border countries on the detail page
	Toggle the color scheme between light and dark mode (optional)
	
*/

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './components/Card'
import Details from './components/Details'
import Header from './components/Header'
import Navbar from './components/Navbar'

const Application = styled.div`
	min-height: 100vh;
	width: 100vw;
	max-width: 90rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	position: relative;
`

const Main = styled.main`
	margin-top: 8rem;
	padding: 0 clamp(1rem, 5vw, 5rem);
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 2.4rem;

	@media screen and (min-width: 760px) {
		padding: 0 5rem;
	}
`

const CardContainer = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 2.5rem;
	align-items: center;
	padding: 0 2.5rem 4rem;

	@media screen and (min-width: 760px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		column-gap: 2.5rem;
		padding: 0;
	}
`

const Button = styled.button`
	align-self: flex-start;
	width: 6.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: none;
	font-size: var(--homepage-font-size);
	color: var(--text-color);
	height: 2rem;
	background-color: var(--elements-color);
	border-radius: 0.2rem;
	padding: 0 1.5rem;
	cursor: pointer;
	box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.05);

	ion-icon {
		font-size: 1rem;
		color: var(--text-color);
		cursor: pointer;
	}
`

function App() {
	const [data, setData] = useState([])
	const [filter, setFilter] = useState({
		property: null,
		value: null,
	})
	const [activePage, setActivePage] = useState('home')
	const [history, setHistory] = useState([])

	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/all`)
			.then(res => res.json())
			.then(jsonData => setData(jsonData))
	}, [])

	const displayDetails = page => {
		setHistory(prevHistory => [...prevHistory, activePage])
		setActivePage(page)
	}

	const goBackInHistory = () => {
		const prevPage = history[history.length - 1]
		if (history.length === 1) setHistory([])
		else setHistory(prevHistory => [...prevHistory.slice(0, -1)])
		setActivePage(prevPage)
	}

	const filteredData = !filter.property
		? data
		: data.filter(country =>
				filter.property === 'region'
					? country.region === filter.value
					: country.name.common.toLowerCase().includes(filter.value)
		  )

	const cards = filteredData.map(({ name, altSpellings, capital, population, region, flags }, idx) => {
		return (
			<Card
				key={idx}
				name={name}
				altSpellings={altSpellings}
				capital={capital}
				population={new Intl.NumberFormat('en-IN').format(population)}
				region={region}
				flag={flags.svg}
				handler={displayDetails}
			/>
		)
	})

	return (
		<Application id='app'>
			<Header />
			<Main>
				{activePage === 'home' ? (
					<>
						<Navbar filter={filter} handler={setFilter} />
						<CardContainer>{cards}</CardContainer>
					</>
				) : (
					<>
						<Button onClick={() => goBackInHistory()}>
							<ion-icon name='arrow-back'></ion-icon>
							Back
						</Button>
						<Details name={activePage} data={data} handler={displayDetails} />
					</>
				)}
			</Main>
		</Application>
	)
}

export default App

