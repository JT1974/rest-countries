import styled from 'styled-components'

const ButtonContainer = styled.button`
	align-self: flex-start;
	width: 6.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: none;
	font-size: var(--homepage-font-size);
	color: var(--text-color);
	height: 2rem;
	background-color: var(--elements-color);
	border-radius: 0.2rem;
	padding: 0 1.5rem;
	cursor: pointer;
	box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.05);

	ion-icon {
		font-size: 1rem;
		color: var(--text-color);
		cursor: pointer;
	}
`

export default function Button({ handler }) {
	return (
		<ButtonContainer onClick={handler}>
			<ion-icon name='arrow-back'></ion-icon>
			Back
		</ButtonContainer>
	)
}

