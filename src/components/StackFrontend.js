import { motion } from 'framer-motion'

const frontEnd = [
	'Javascript ES6',
	'HTML & CSS',
	'React',
	'Redux',
	'Semantic UI',
	'Styled-Components',
]

function StackFrontEnd({ show, delay }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: '3vh' }}
			animate={{
				opacity: show.stack ? 1 : 0,
				y: show.stack ? '0' : '3vh',
			}}
			transition={{ type: 'spring', duration: 2, delay: delay }}
		>
			<div className='stack-list'>
				<h4>Backend</h4>
				{frontEnd.map((tech) => (
					<div>{tech}</div>
				))}
			</div>
		</motion.div>
	)
}

export default StackFrontEnd
