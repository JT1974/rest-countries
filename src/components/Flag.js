import styled from 'styled-components'

const Flag = styled.div`
	background-image: url('${props => props.src}');
	background-origin: border-box;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
	justify-self: flex-start;
	width: 100%;
	max-width: 20rem;
	height: 12rem;
`

export default function Card(props) {
	return <Flag {...props}></Flag>
}

