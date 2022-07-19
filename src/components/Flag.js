import styled from 'styled-components'

const Image = styled.img.attrs(props => ({
	alt: props.alt || '',
}))`
	justify-self: flex-start;
	width: 100%;
	max-width: 20rem;
	height: 12rem;
`

export default function Flag({ src, alt }) {
	return <Image src={src} alt={alt}></Image>
}

