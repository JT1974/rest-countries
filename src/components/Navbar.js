import styled from 'styled-components'
import FilterBox from './FilterBox'
import SearchBox from './SearchBox'

const Nav = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 2.5rem;
`

export default function Navbar(props) {
	return (
		<Nav>
			<SearchBox {...props} />
			<FilterBox {...props} />
		</Nav>
	)
}

