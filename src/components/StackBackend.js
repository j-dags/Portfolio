import { FlexRow } from './StyledComponents'
import { motion } from 'framer-motion'

const backEnd = ['Node', 'Express', 'Postgres', 'Sequelize']

function StackBackend({ show, delay }) {
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
				{backEnd.map((tech) => (
					<div>{tech}</div>
				))}
			</div>
		</motion.div>
	)
}

export default StackBackend