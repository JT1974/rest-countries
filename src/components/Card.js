import styled from 'styled-components'

const CountryCard = styled.article`
	width: 100%;
	max-width: 16.5rem;
	height: 23rem;
	border-radius: 0.5rem;
	background-color: var(--elements-color);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: var(--text-color);
	cursor: pointer;
	box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.03);
`
const Flag = styled.div`
	background-image: url('${props => props.flag}');
	background-origin: border-box;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
	justify-self: flex-start;
	width: 100%;
	max-width: 20rem;
	height: 12rem;
	border-radius: 0.5rem 0.5rem 0 0;
`
const Data = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 0.25em;
	align-items: flex-start;
	padding: 2rem 1.5rem;

	h2 {
		font-size: calc(var(--homepage-font-size) * 1.25);
		margin-bottom: 0.5em;
	}

	p {
		width: 100%;
		font-size: var(--homepage-font-size);
		font-weight: var(--font-weight-light);

		span {
			font-weight: var(--font-weight-semibold);
			margin-right: 0.5rem;
		}
	}
`

export default function Card({ handler, name, altSpellings, flag, population, region, capital }) {
	return (
		<CountryCard onClick={() => handler(name.common)} title={`${name.common}, ${region}`}>
			<Flag flag={flag}></Flag>
			<Data>
				<h2>{name.common ? name.common : altSpellings[altSpellings.length - 1]}</h2>
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
			</Data>
		</CountryCard>
	)
}

