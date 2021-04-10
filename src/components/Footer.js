import React from 'react'
import { FlexRow } from './'
import './Footer.css'

function Footer() {
	return (
		<section id='footer'>
			<div className='section-container'>
				<h1>Let's connect!</h1>
				<p>
					Looking for a developer, have a question, or just want to connect? Hit
					me up at{' '}
					<span>
						<a
							href='mailto:jon@dagdagan.dev'
							target='_blank'
							className='emailTo'
							rel='noreferrer'
						>
							jon@dagdagan.dev.
						</a>
					</span>{' '}
				</p>
				<FlexRow className='footer-links'>
					<h4 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
						DAGDAGAN.DEV
					</h4>
					<span>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://github.com/j-dags'
							className='github'
						>
							github
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.linkedin.com/in/jon-dagdagan/'
						>
							linkedin
						</a>
					</span>
				</FlexRow>
			</div>
		</section>
	)
}

export default Footer
