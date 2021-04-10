import { motion } from 'framer-motion'

const hosting = ['Heroku', 'Firebase', 'Netlify']

function StackHosting({ show, delay }) {
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
				<h4>Hosting</h4>
				{hosting.map((tech) => (
					<div>{tech}</div>
				))}
			</div>
		</motion.div>
	)
}

export default StackHosting
