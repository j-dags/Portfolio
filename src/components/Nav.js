import React from 'react'
import { FlexRow, FlexCol } from './StyledComponents'
import './Nav.css'

function Nav() {
	return (
		<section>
			<nav>
				<h3>DAGDAG.DEV</h3>
				<FlexRow className='links'>
					<a target='_blank' href='https://github.com/j-dags'>
						github
					</a>
					<a target='_blank' href='https://www.linkedin.com/in/jon-dagdagan/'>
						linkedin
					</a>
				</FlexRow>
			</nav>
		</section>
	)
}

export default Nav
