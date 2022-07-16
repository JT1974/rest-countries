export default function Details({ name, data, handler }) {
	const { altSpellings, population, region, subregion, capital, tld, currencies, languages, borders, flags } =
		data.find(country => country.name.common === name)

	const neighbours = borders?.map((countryCode, idx) => {
		const neighbour = data.find(country => country.cca3 === countryCode)
		return (
			<button key={idx} className='neighbour-btn' onClick={() => handler(neighbour.name.common)}>
				{neighbour.name.common}
			</button>
		)
	})

	//DEBUG
	console.log(data.find(country => country.name.common === name))

	return (
		<div className='country-details'>
			<img className='country-details--flag' src={flags.svg} alt={name} title={name} />
			<div className='country-details--data'>
				<h2>{name}</h2>
				<div className='country-details--data__left'>
					<p>
						Native Name:
						<span>{altSpellings.length > 1 ? altSpellings[altSpellings.length - 1] : name}</span>
					</p>
					<p>
						Population:<span>{population}</span>
					</p>
					<p>
						Region:<span>{region}</span>
					</p>
					<p>
						Subregion:<span>{subregion || 'none'}</span>
					</p>
					<p>
						Capital:<span>{capital || 'none'}</span>
					</p>
				</div>
				<div className='country-details--data__right'>
					<p>
						Top Level Domain:<span>{tld || 'none'}</span>
					</p>
					<p>
						Currencies:
						<span>{currencies ? Object.values(currencies).map(obj => obj.name) : 'none'}</span>
					</p>
					<p>
						Languages:<span>{languages ? Object.values(languages).join(', ') : 'none'}</span>
					</p>
				</div>
				<div className='country-details--data__bottom'>
					<p>
						Border countries:
						{neighbours || 'none'}
					</p>
				</div>
			</div>
		</div>
	)
}

