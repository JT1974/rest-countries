import styled from 'styled-components'

const DetailsContainer = styled.div`
	width: 100%;
	max-width: 20rem;
	display: grid;
	grid-template: auto auto / auto;
	align-items: center;
	justify-content: space-between;
	gap: clamp(2rem, 10vw, 7.5rem);
	color: var(--text-color);
	margin-top: 1.6rem;

	img {
		width: 100%;
		max-height: 25rem;
		align-self: flex-start;
	}

	@media screen and (min-width: 850px) {
		max-width: unset;
		grid-template: auto / 20rem 1fr;
	}

	@media screen and (min-width: 1200px) {
		grid-template: auto / repeat(2, 1fr);
	}
`

const Data = styled.div`
	width: 100%;
	height: fit-content;
	display: grid;
	gird-template-columns: 1fr;
	justify-content: space-between;
	gap: 1.5rem;
	font-size: var(--details-page-font-size);

	h2 {
		font-size: 2em;
	}

	p {
		width: 100%;
		font-weight: var(--font-weight-light);
		margin-bottom: 0.5rem;

		span {
			font-weight: var(--font-weight-semibold);
			margin-right: 0.5rem;
		}
	}

	.col-bt {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;

		span {
			font-size: 1.1em;
			font-weight: var(--font-weight-semibold);
		}

		div {
			display: inline-flex;
			flex-wrap: wrap;
			gap: 0.5rem;
		}
	}

	@media screen and (min-width: 1200px) {
		gird-template-columns: repeat(2, auto);
		gird-template-rows: repeat(3, auto);

		h2 {
			grid-area: 1 / 1 / 2 / 3;
		}

		.col-bt {
			grid-area: 3 / 1 / 4 / 3;
		}
	}
`

const Button = styled.button`
	min-width: 6rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	font-size: calc(var(--homepage-font-size) * 0.85);
	color: var(--text-color);
	height: 1.8rem;
	background-color: var(--elements-color);
	border-radius: 0.1rem;
	padding: 0.5rem;
	cursor: pointer;
	box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.05);
`

export default function Details({ name, data, handler }) {
	const { altSpellings, population, region, subregion, capital, tld, currencies, languages, borders, flags } =
		data.find(country => country.name.common === name)

	const neighbours = borders?.map((countryCode, idx) => {
		const neighbour = data.find(country => country.cca3 === countryCode)
		return (
			<Button key={idx} onClick={() => handler(neighbour.name.common)}>
				{neighbour.name.common}
			</Button>
		)
	})

	return (
		<DetailsContainer>
			<img src={flags.svg} alt='' />
			<Data>
				<h2>{name}</h2>
				<div className='col-lt'>
					<p>
						<span>Native Name:</span>
						{altSpellings.length > 1 ? altSpellings[altSpellings.length - 1] : name}
					</p>
					<p>
						<span>Population:</span>
						{population ? new Intl.NumberFormat('en-EN').format(population) : ''}
					</p>
					<p>
						<span>Region:</span>
						{region ? region : ''}
					</p>
					<p>
						<span>Subregion:</span>
						{subregion ? subregion : ''}
					</p>
					<p>
						<span>Capital:</span>
						{capital ? capital : ''}
					</p>
				</div>
				<div className='col-rt'>
					<p>
						<span>Top Level Domain:</span>
						{tld ? tld.join(', ') : ''}
					</p>
					<p>
						<span>Currencies:</span>
						{currencies ? Object.values(currencies).map(obj => obj.name) : ''}
					</p>
					<p>
						<span>Languages:</span>
						{languages ? Object.values(languages).join(', ') : ''}
					</p>
				</div>
				<div className='col-bt'>
					<span>Border countries:</span>
					<div>{neighbours}</div>
				</div>
			</Data>
		</DetailsContainer>
	)
}

