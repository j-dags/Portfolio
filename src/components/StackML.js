import { motion } from 'framer-motion'

const ml = ['Python', 'TensorFlow']

function StackML({ show, delay }) {
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
				<h4>Machine Learning</h4>
				{ml.map((tech) => (
					<div>{tech}</div>
				))}
			</div>
		</motion.div>
	)
}

export default StackML
