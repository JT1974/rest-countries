export default function Card({ name, capital, population, region, flag, handler }) {
	return (
		<div className='country-card' onClick={() => handler(name)}>
			<img className='country-card--flag' src={flag} alt={name} title={name} />
			<div className='country-card--data'>
				<h2>{name}</h2>
				<p>
					<span>Population:</span>
					{population}
				</p>
				<p>
					<span>Region:</span>
					{region}
				</p>
				<p>
					<span>Capital:</span>
					{capital}
				</p>
			</div>
		</div>
	)
}

