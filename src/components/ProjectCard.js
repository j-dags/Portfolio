import React from 'react'
import { motion } from 'framer-motion'
import { FlexColLeft } from './'

function ProjectCard({ link, img, alt, title, description }) {
	return (
		<FlexColLeft>
			<a href={link} target='_blank' rel='noreferrer'>
				<motion.div
					whileHover={{ scale: 1.05, opacity: 0.9 }}
					whileTap={{ scale: 0.95 }}
					transition={{ type: 'tween', duration: 0.25 }}
				>
					<img src={img} alt={alt} />
				</motion.div>
				<h3>{title}</h3>
				<p>{description}</p>
			</a>
		</FlexColLeft>
	)
}

export default ProjectCard
