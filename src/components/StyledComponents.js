import styled from 'styled-components'

export const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
`

export const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const FlexColLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

// opacity: ${({ animate }) => (animate ? '0.5' : '0')};

export const Slide = styled.div`
	transform: translateX(${({ animate }) => (animate ? '0' : '-100vw')});
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-gap: 4em;
`
