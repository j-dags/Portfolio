import React from 'react'

function Projects() {
	return (
		<section>
			<div className="section-container">
				<h1>Projects</h1>
				<p>
					I like to stay busy and always have a project in the works. Take a
					look at some of the applications, articles, and companies I've
					dedicated my time to.
				</p>
				<div className="grid-container">
					<div className="flexCol">
						<img src="./InfauxWars.png" alt="Infaux Wars" />
						<h3>Infaux Wars</h3>
						<p>Fake news detection web app</p>
					</div>

					<div className="flexCol">
						<img src="./AboveTheBreak.png" alt="Infaux Wars" />
						<h3>Above The Break</h3>
						<p>Fantasy basketball stats tracker and visualizer</p>
					</div>
					<div className="flexCol">
						<img src="./AboveTheBreak.png" alt="Infaux Wars" />
						<h3>Medium Article</h3>
						<p>Fantasy basketball stats tracker and visualizer</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
