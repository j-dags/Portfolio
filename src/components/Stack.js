import React, { useLayoutEffect, useRef, useState } from 'react'
import { FlexRow } from './StyledComponents'
import { motion } from 'framer-motion'
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
	const [show, setShow] = useState({ stack: false })
	const stackRef = useRef(null)

	useLayoutEffect(() => {
		const topPos = (element) => element.getBoundingClientRect().top
		const stackPos = topPos(stackRef.current)

		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight
			if (scrollPos > stackPos + 100) {
				setShow((state) => ({ ...state, stack: true }))
			}
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<section>
			<div className='section-container'>
				<FlexRow id='stack-cntr'>
					{/* Animation for stack title */}
					<motion.div
						ref={stackRef}
						initial={{ opacity: 0, x: '-3vw' }}
						animate={{
							opacity: show.stack ? 1 : 0,
							x: show.stack ? '0' : '-3vw',
						}}
						transition={{ type: 'spring', duration: 2 }}
					>
						<h1 style={{ margin: 0 }}>Stack</h1>
					</motion.div>
					<div className='stack'>
						{/* Animation for Frontend */}
						<motion.div
							initial={{ opacity: 0, y: '3vh' }}
							animate={{
								opacity: show.stack ? 1 : 0,
								y: show.stack ? '0' : '3vh',
							}}
							transition={{ type: 'spring', duration: 2, delay: 0.1 }}
						>
							<div className='stack-list'>
								<h4>Frontend</h4>
								{frontEnd.map((tech) => (
									<div>{tech}</div>
								))}
							</div>
						</motion.div>
						{/* Animation for backend */}
						<motion.div
							initial={{ opacity: 0, y: '3vh' }}
							animate={{
								opacity: show.stack ? 1 : 0,
								y: show.stack ? '0' : '3vh',
							}}
							transition={{ type: 'spring', duration: 2, delay: 0.2 }}
						>
							<div className='stack-list'>
								<h4>Backend</h4>
								{backEnd.map((tech) => (
									<div>{tech}</div>
								))}
							</div>
						</motion.div>
						{/* Animation for hosting */}
						<motion.div
							initial={{ opacity: 0, y: '3vh' }}
							animate={{
								opacity: show.stack ? 1 : 0,
								y: show.stack ? '0' : '3vh',
							}}
							transition={{ type: 'spring', duration: 2, delay: 0.3 }}
						>
							<div className='stack-list'>
								<h4>Hosting</h4>
								{hosting.map((tech) => (
									<div>{tech}</div>
								))}
							</div>
						</motion.div>
						{/* Animation for machine learning */}
						<motion.div
							initial={{ opacity: 0, y: '3vh' }}
							animate={{
								opacity: show.stack ? 1 : 0,
								y: show.stack ? '0' : '3vh',
							}}
							transition={{ type: 'spring', duration: 2, delay: 0.4 }}
						>
							<div className='stack-list'>
								<h4>Machine Learning</h4>
								{ml.map((tech) => (
									<div>{tech}</div>
								))}
							</div>
						</motion.div>
					</div>
				</FlexRow>
			</div>
		</section>
	)
}

export default Stack
