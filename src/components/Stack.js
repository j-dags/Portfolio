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

function Stack() {
	return (
		<section>
			<div className="section-container">
				<h1>Stack</h1>

				<div className="stack">
					<div className="stack-list">
						<h4>Frontend</h4>
						{frontEnd.map((tech) => (
							<div>{tech}</div>
						))}
					</div>
					<div className="stack-list">
						<h4>Backend</h4>
						{backEnd.map((tech) => (
							<div>{tech}</div>
						))}
					</div>
					<div className="stack-list">
						<h4>Hosting</h4>
						{hosting.map((tech) => (
							<div>{tech}</div>
						))}
					</div>
					<div className="stack-list">
						<h4>Machine Learning</h4>
						{ml.map((tech) => (
							<div>{tech}</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Stack
