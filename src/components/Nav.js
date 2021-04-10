import React from 'react'
import { FlexRow } from './StyledComponents'
import './Nav.css'

function Nav() {
	return (
		<section>
			<nav>
				<h3>DAGDAGAN.DEV</h3>
				<FlexRow className='links' style={{ position: 'relative' }}>
					<a
						target='_blank'
						className='highlight github'
						rel='noreferrer'
						href='https://github.com/j-dags'
					>
						github
					</a>
					<a
						className='highlight'
						target='_blank'
						rel='noreferrer'
						href='https://www.linkedin.com/in/jon-dagdagan/'
					>
						linkedin
					</a>
				</FlexRow>
			</nav>
		</section>
	)
}

export default Nav
