import { useState } from 'react'
import styled from 'styled-components'

const Search = styled.div`
	width: 100%;
	max-width: 20rem;
	height: 3rem;
	background-color: var(--elements-color);
	border-radius: 0.3rem;
	display: flex;
	align-items: center;
	gap: 1.5rem;
	padding: 0 2rem;
	box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.03);

	ion-icon {
		font-size: 1.2rem;
		color: var(--input-color);
		cursor: pointer;
	}

	input {
		width: 100%;
		background-color: transparent;
		border: none;
		font-size: var(--homepage-font-size);
		color: var(--input-color);

		&::placeholder {
			color: var(--input-color);
		}

		&:focus {
			background-color: transparent;
			outline: none;
		}
	}

	@media screen and (min-width: 925px) {
		max-width: 30rem;
	}
`

export default function SearchBox({ filter, handler }) {
	const [query, setQuery] = useState(filter.property === 'name' ? filter.value : '')

	return (
		<Search>
			<ion-icon
				name='search'
				onClick={() =>
					query
						? handler({ property: 'name', value: query.toLowerCase() })
						: handler({ property: null, value: null })
				}
			></ion-icon>
			<input
				name='search-text'
				type='text'
				placeholder='Search for a country...'
				value={query}
				onChange={e => setQuery(e.target.value)}
				onKeyDown={e =>
					e.key === 'Enter' &&
					(query ? handler({ property: 'name', value: query }) : handler({ property: null, value: null }))
				}
			/>
		</Search>
	)
}

