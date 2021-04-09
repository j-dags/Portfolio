import React from 'react'
import { FlexColLeft } from './StyledComponents'

function Projects() {
	return (
		<section>
			<div className='section-container'>
				<h1>Projects</h1>

				<div className='grid-container'>
					<FlexColLeft>
						<a
							href='https://github.com/j-dags/InfauxWars'
							target='_blank'
							rel='noreferrer'
						>
							<img src='./InfauxWars.png' alt='Infaux Wars' />
							<h3>Infaux Wars</h3>
							<p>Fake news detection web app</p>
						</a>
					</FlexColLeft>

					<FlexColLeft>
						<a
							href='https://github.com/j-dags/AboveTheBreak'
							target='_blank'
							rel='noreferrer'
						>
							<img src='./AboveTheBreak.png' alt='Infaux Wars' />
							<h3>Above The Break</h3>
							<p>Fantasy basketball stats tracker and visualizer</p>
						</a>
					</FlexColLeft>
					<FlexColLeft>
						<a
							href='https://jon-dagdagan.medium.com/fake-news-detection-pre-processing-text-d9648a2854e5'
							target='_blank'
							rel='noreferrer'
						>
							<img src='./MediumArticle.png' alt='Infaux Wars' />
							<h3>Medium Article</h3>
							<p>Natural language processing for beginners</p>
						</a>
					</FlexColLeft>
				</div>
			</div>
		</section>
	)
}

export default Projects
