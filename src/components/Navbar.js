import { useState } from 'react'
export default function Navbar({ filter, handler }) {
	const [query, setQuery] = useState(filter.property === 'name' ? filter.value : '')

	return (
		<nav>
			<div className='search'>
				<ion-icon
					name='search'
					onClick={() =>
						query ? handler({ property: 'name', value: query }) : handler({ property: null, value: null })
					}
				></ion-icon>
				<input
					className='search--text'
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
			</div>
			<div className='filter'>
				<button>
					Filter by region...
					<ion-icon name='chevron-down'></ion-icon>
				</button>
				<ul
					className='filter--list'
					onClick={e => {
						if (e.target.innerText === 'All') handler({ property: null, value: null })
						else handler({ property: 'region', value: e.target.innerText })
					}}
				>
					<li>All</li>
					<li>Africa</li>
					<li>Americas</li>
					<li>Asia</li>
					<li>Europe</li>
					<li>Oceania</li>
				</ul>
			</div>
		</nav>
	)
}

