import React from 'react'

const frontEnd = [
	'Javascript ES6',
	'HTML & CSS',
	'React',
	'Redux',
	'Semantic UI',
	'Styled-Components',
]

const backEnd = ['Node', 'Express', 'Postgres', 'Sequelize']

const hosting = ['Heroku', 'Firebase', 'Netlify']

const ml = ['Python', 'TensorFlow']

function Intro() {
	return (
		<section>
			<div className="section-container">
				<h3>DAGDAG.DEV</h3>
				<div className="intro">
					<div className="name">
						Hey! I'm Jon.
						<br />
						Software Engineer
						<br />
						and teaching fellow.
					</div>
					<div className="description">
						<p>
							As a former electrical engineer turned fullstack developer, I’m
							interested in crafting simple solutions to interesting problems.
							Machine learning, responsive design, and physics-based animation
							libraries are particular areas of interest.
						</p>

						<p>
							Outside of coding, you can find me out on a hike, soldering
							keyboards, or trying to find the perfect hydration level for my
							pizza dough.
						</p>
					</div>
				</div>
				<img
					src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
					alt=""
					style={{ height: '400px', width: '100%', margin: '3rem 0rem' }}
				/>
			</div>
		</section>
	)
}

export default Intro
