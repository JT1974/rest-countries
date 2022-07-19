import styled from 'styled-components'

const Image = styled.img`
	justify-self: flex-start;
	width: 100%;
	max-width: 20rem;
	height: 12rem;
`

export default function Flag({ src }) {
	return <Image src={src}></Image>
}

