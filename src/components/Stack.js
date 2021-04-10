import React, { useLayoutEffect, useRef, useState } from 'react'
import { FlexRow, Slide } from './StyledComponents'
import './Stack.css'

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
	const [show, doShow] = useState({ itemOne: false })
	const refOne = useRef(null)

	useLayoutEffect(() => {
		const topPos = (element) => element.getBoundingClientRect().top
		const div1Pos = topPos(refOne.current)
		console.log('div1Pos ', div1Pos)

		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight
			if (div1Pos < scrollPos) doShow((state) => ({ ...state, itemOne: true }))
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<section>
			<div className='section-container'>
				<Slide animate={show.itemOne} ref={refOne}>
					<FlexRow id='stack-cntr'>
						<h1 style={{ margin: 0 }}>Stack</h1>

						<div className='stack'>
							<div className='stack-list'>
								<h4>Frontend</h4>
								{frontEnd.map((tech) => (
									<div>{tech}</div>
								))}
							</div>
							<div className='stack-list'>
								<h4>Backend</h4>
								{backEnd.map((tech) => (
									<div>{tech}</div>
								))}
							</div>
							<div className='stack-list'>
								<h4>Hosting</h4>
								{hosting.map((tech) => (
									<div>{tech}</div>
								))}
							</div>
							<div className='stack-list'>
								<h4>Machine Learning</h4>
								{ml.map((tech) => (
									<div>{tech}</div>
								))}
							</div>
						</div>
					</FlexRow>
				</Slide>
			</div>
		</section>
	)
}

export default Stack
