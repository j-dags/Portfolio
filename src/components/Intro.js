import React from 'react'
import { motion } from 'framer-motion'

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
			<div className='section-container'>
				<div className='intro'>
					<div className='name'>
						<motion.div
							initial={{ opacity: 0, x: '-3vw' }}
							animate={{ opacity: 1, x: '0' }}
							transition={{ type: 'spring', duration: 2 }}
						>
							Hey! I'm Jon.
							<br />
							Software Engineer
							<br />
							and teaching fellow.
						</motion.div>
					</div>
					<div className='description'>
						<motion.div
							initial={{ opacity: 0, y: '4vh' }}
							animate={{ opacity: 1, y: '0' }}
							transition={{
								delay: 0.25,
								duration: 2,
								type: 'spring',
							}}
						>
							<p>
								As a former electrical engineer turned fullstack developer, I
								love crafting simple solutions to interesting problems. Machine
								learning, responsive design, and physics-based animation
								libraries are particular areas of interest.
							</p>
							<span>{<br />}</span>
							<p>
								Outside of coding, you can find me out on a hike, soldering
								keyboards, or trying to find the perfect hydration level for my
								pizza dough.
							</p>
						</motion.div>
					</div>
				</div>
				<motion.div
					initial={{ opacity: 0, y: '5vh' }}
					animate={{ opacity: 1, y: '0' }}
					transition={{ delay: 0.5, type: 'spring', duration: 2.75 }}
				>
					<img
						src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
						alt=''
						style={{ height: '400px', width: '100%', margin: '3rem 0rem' }}
					/>
				</motion.div>
			</div>
		</section>
	)
}

export default Intro
