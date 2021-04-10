import React from 'react'
import { motion } from 'framer-motion'

function SectionHeader({ title, description, show, delay }) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, x: '-3vw' }}
				animate={{
					opacity: show ? 1 : 0,
					x: show ? '0' : '-3vw',
				}}
				transition={{ type: 'spring', duration: 2 }}
			>
				<h1>{title}</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: '-2vw' }}
				animate={{
					opacity: show ? 1 : 0,
					x: show ? '0' : '-2vw',
				}}
				transition={{ type: 'spring', duration: 2, delay: delay }}
			>
				<p className='projects-description'>{description}</p>
			</motion.div>
		</>
	)
}

export default SectionHeader
