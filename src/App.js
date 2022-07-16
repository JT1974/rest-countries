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
import Card from './components/Card'
import Details from './components/Details'
import Header from './components/Header'
import Navbar from './components/Navbar'

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
				population={population}
				region={region}
				flag={flags.svg}
				handler={displayDetails}
			/>
		)
	})

	return (
		<div className='app'>
			<Header />
			<main>
				{activePage === 'home' ? (
					<>
						<Navbar filter={filter} handler={setFilter} />
						<section className='country-card--container'>{cards}</section>
					</>
				) : (
					<>
						<button onClick={() => goBackInHistory()}>
							<ion-icon name='arrow-back'></ion-icon>
							Back
						</button>
						<Details name={activePage} data={data} handler={displayDetails} />
					</>
				)}
			</main>
		</div>
	)
}

export default App

