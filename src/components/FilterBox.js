import styled from 'styled-components'

const Filter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 15rem;
	position: relative;

	button {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: none;
		font-size: var(--homepage-font-size);
		color: var(--input-color);
		height: 3rem;
		background-color: var(--elements-color);
		border-radius: 0.3rem;
		padding: 0 1rem 0 1.5rem;
		cursor: pointer;
		box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.03);

		ion-icon {
			font-size: 1.2rem;
			color: var(--input-color);
			cursor: pointer;
		}

		span {
			font-weight: var(--font-weight-semibold);
		}
	}

	ul {
		position: absolute;
		top: 3.5rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
		border: none;
		font-size: var(--homepage-font-size);
		color: var(--input-color);
		background-color: var(--elements-color);
		border-radius: 0.3rem;
		padding: 0.75rem 0;
		list-style-type: none;
		transition: all 0.5s ease-in-out;
		z-index: 2;
		opacity: 0;
		visibility: hidden;

		li {
			width: 100%;
			padding: 0.25rem 1.5rem;
		}

		li:hover {
			cursor: pointer;
			text-shadow: 0 0 0.5rem var(--elements-color);
			background-color: var(--background-color);
			border-left: 1px solid var(--elements-color);
			border-right: 1px solid var(--elements-color);
		}
	}

	button:focus ~ ul {
		visibility: visible;
		opacity: 1;
		box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.03);
	}
`
export default function FilterBox({ filter, handler }) {
	return (
		<Filter>
			<button>
				Filter by Region:
				<span>{filter.property === 'region' ? filter.value : ''}</span>
				<ion-icon name='chevron-down'></ion-icon>
			</button>
			<ul
				onClick={e => {
					const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
					if (e.target.innerText === 'All') handler({ property: null, value: null })
					if (regions.includes(e.target.innerText)) handler({ property: 'region', value: e.target.innerText })
				}}
			>
				<li>All</li>
				<li>Africa</li>
				<li>Americas</li>
				<li>Asia</li>
				<li>Europe</li>
				<li>Oceania</li>
			</ul>
		</Filter>
	)
}

