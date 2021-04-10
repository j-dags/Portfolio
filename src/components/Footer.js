import React from 'react'
import './Footer.css'

function Footer() {
	return (
		<section id='footer'>
			<div className='section-container'>
				<h1>Let's connect!</h1>
				<p>
					Feel free to reach out to me if you're looking for a developer, have a
					question, or just want to connect!
				</p>
				<span>{<br />}</span>
				<a
					href='mailto:jon@dagdagan.dev'
					target='_blank'
					className='emailTo'
					rel='noreferrer'
				>
					jon@dagdagan.dev
				</a>
			</div>
		</section>
	)
}

export default Footer
